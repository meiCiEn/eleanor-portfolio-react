import { useRef, useState } from "react";
import ActionButton from "../ui/ActionButton";
import "./ContactForm.css";

export default function ContactForm() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const startedAtRef = useRef(Date.now()); // for simple time-to-submit anti-bot

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const ENDPOINT_URL = "https://eleanor-mears.com/api/contact.php";

    // Honeypots
    const hp1 = (form.get("website") || "").toString().trim();
    const hp2 = (form.get("_gotcha") || "").toString().trim();
    if (hp1 || hp2) {
      setStatus({ type: "error", msg: "Submission blocked." });
      return;
    }

    // HTML5 validation
    if (!formEl.checkValidity()) {
      formEl.reportValidity?.();
      return;
    }

    // Compose full name (optional convenience)
    const first = (form.get("firstName") || "").toString().trim();
    const last  = (form.get("lastName")  || "").toString().trim();
    if (!form.get("name")) form.append("name", [first, last].filter(Boolean).join(" ").trim());

    // Anti-bot timing signal (server can reject < 2–3s)
    form.append("startedAt", String(startedAtRef.current || ""));

    setSubmitting(true);
    try {
      const res = await fetch(ENDPOINT_URL, { method: "POST", body: form });
      // const res = await fetch("/api/contact.php", { method: "POST", body: form });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || data?.ok !== true) {
        throw new Error(data?.message || "Send failed. Please try again.");
      }

      setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
      formEl.reset();
      startedAtRef.current = Date.now(); // reset timer for next submit
    } catch (err) {
      setStatus({ type: "error", msg: err?.message || "Send failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form cf" noValidate>
      {/* Name row */}
      <div className="cf-grid cf-grid--two">
        <div>
          <label htmlFor="firstName" className="required">
            First name<span aria-hidden="true"> *</span>
          </label>
          <input id="firstName" name="firstName" type="text" required maxLength={100} />
        </div>
        <div>
          <label htmlFor="lastName" className="required">
            Last name<span aria-hidden="true"> *</span>
          </label>
          <input id="lastName" name="lastName" type="text" required maxLength={100} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="required">
          Email address<span aria-hidden="true"> *</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={254}
        />
      </div>

      <div>
        <label htmlFor="subject" className="required">
          Subject<span aria-hidden="true"> *</span>
        </label>
        <input id="subject" name="subject" type="text" required maxLength={200} />
      </div>

      <div>
        <label htmlFor="message" className="required">
          Your comments / questions<span aria-hidden="true"> *</span>
        </label>
        <textarea id="message" name="message" rows={6} required maxLength={5000} />
      </div>

      {/* Honeypots */}
      <div className="cf-honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="cf-honeypot" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cf-actions">
        <ActionButton
          type="submit"
          variant="inverted"
          disabled={isSubmitting}
          style={{ minWidth: "180px" }}
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </ActionButton>
      </div>

      {status.msg && (
        <p
          className={`status-message ${status.type === "success" ? "success" : "error"}`}
          aria-live="polite"
        >
          {status.msg}
        </p>
      )}

      <p className="privacy-note">
        By submitting, you consent to the processing of your data to respond to your inquiry.
      </p>
    </form>
  );
}
