<?php
// contact.php — no hCaptcha version with simple anti-spam

// Start session early for simple rate limiting
session_start();

// Security headers
header('X-Content-Type-Options: nosniff');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed']);
  exit;
}

require_once __DIR__ . '/../../config.php';

// Same-origin check (optional but recommended if API is same-site only)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host   = $_SERVER['HTTP_HOST'] ?? '';
if ($origin && strpos($origin, $host) === false) {
  http_response_code(403);
  echo json_encode(['message' => 'Forbidden']);
  exit;
}

// --- Simple rate limiting: 3 submissions / 10 minutes per session ---
$_SESSION['last_submits'] = $_SESSION['last_submits'] ?? [];
$windowSeconds = 600; // 10 minutes
$now = time();
$_SESSION['last_submits'] = array_values(array_filter(
  $_SESSION['last_submits'],
  fn($t) => $t > $now - $windowSeconds
));
if (count($_SESSION['last_submits']) >= 3) {
  http_response_code(429);
  echo json_encode(['message' => 'Too many requests. Please try again later.']);
  exit;
}

// --- Honeypots (names match your form) ---
$hp1 = trim($_POST['website']  ?? '');
$hp2 = trim($_POST['_gotcha']  ?? '');
if ($hp1 !== '' || $hp2 !== '') {
  http_response_code(400);
  echo json_encode(['message' => 'Spam detected']);
  exit;
}

// --- Required fields ---
$firstName = trim($_POST['firstName'] ?? '');
$lastName  = trim($_POST['lastName']  ?? '');
$email     = trim($_POST['email']     ?? '');
$subject   = trim($_POST['subject']   ?? '');
$message   = trim($_POST['message']   ?? '');

if ($firstName === '' || $lastName === '' || $email === '' || $subject === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['message' => 'Missing required fields']);
  exit;
}

// --- Basic length limits (mirror front-end) ---
if (strlen($firstName) > 100 || strlen($lastName) > 100 || strlen($subject) > 200 || strlen($message) > 5000) {
  http_response_code(400);
  echo json_encode(['message' => 'Input too long']);
  exit;
}

// --- Basic email sanity check (syntax only) ---
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['message' => 'Invalid email address']);
  exit;
}

// --- Time-to-submit heuristic: reject submissions faster than 2.5s ---
$startedAt = (int)($_POST['startedAt'] ?? 0); // from front end in ms
if ($startedAt) {
  $elapsedMs = (int) round(microtime(true) * 1000) - $startedAt;
  if ($elapsedMs < 2500) {
    http_response_code(400);
    echo json_encode(['message' => 'Submission too fast']);
    exit;
  }
}

// --- Optional content heuristic: too many URLs looks spammy ---
$urlsFound = preg_match_all('~https?://~i', $message);
if ($urlsFound !== false && $urlsFound > 5) {
  http_response_code(400);
  echo json_encode(['message' => 'Too many links in message']);
  exit;
}

// --- Send email (PHPMailer) ---
require_once __DIR__ . '/../vendor/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/../vendor/phpmailer/src/SMTP.php';
require_once __DIR__ . '/../vendor/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
  // SMTP setup
  $mail->isSMTP();
  $mail->Host       = SMTP_HOST;
  $mail->SMTPAuth   = true;
  $mail->Username   = SMTP_USER;
  $mail->Password   = SMTP_PASS;
  $mail->SMTPSecure = SMTP_SECURE; // 'tls' or 'ssl'
  $mail->Port       = SMTP_PORT;

  // From/To
  $mail->setFrom(MAIL_FROM, 'Portfolio Contact'); // MAIL_FROM should be a verified sender on your SMTP
  $mail->addAddress(MAIL_TO);

  // Put the user's email in Reply-To for easy replying (safer for deliverability)
  $mail->addReplyTo($email, $firstName . ' ' . $lastName);

  // Subject + bodies
  $safeSubject = '[Portfolio] ' . $subject;
  $mail->Subject = $safeSubject;

  $text = "From: {$firstName} {$lastName} <{$email}>\nSubject: {$subject}\n\n{$message}";
  $html = sprintf(
    '<p><strong>From:</strong> %s %s &lt;%s&gt;</p><p><strong>Subject:</strong> %s</p><p>%s</p>',
    htmlspecialchars($firstName, ENT_QUOTES, 'UTF-8'),
    htmlspecialchars($lastName,  ENT_QUOTES, 'UTF-8'),
    htmlspecialchars($email,     ENT_QUOTES, 'UTF-8'),
    htmlspecialchars($subject,   ENT_QUOTES, 'UTF-8'),
    nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'))
  );

  $mail->isHTML(true);
  $mail->Body    = $html;
  $mail->AltBody = $text;

  $mail->send();

  // Record successful submit in the session window
  $_SESSION['last_submits'][] = $now;

  echo json_encode(['ok' => true]);
  
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['message' => 'Email send failed']);
}
