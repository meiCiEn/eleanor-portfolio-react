import { useRef, useState } from "react";
import ActionButton from "../ui/ActionButton";

const ENDPOINT = "https://formspree.io/f/xqkoqqdw";

export default function ContactForm() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const startedAtRef = useRef(Date.now());

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", msg: "" });

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    // handy extras for Formspree & filtering
    const first = (form.get("firstName") || "").toString().trim();
    const last = (form.get("lastName") || "").toString().trim();
    if (!form.get("name")) form.append("name", [first, last].filter(Boolean).join(" ").trim());

    // anti-bot signal you were already collecting
    form.append("startedAt", String(startedAtRef.current || ""));

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: form, // multipart/form-data
        headers: { Accept: "application/json" },
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
        formEl.reset();
      } else {
        const msg =
          (data?.errors && data.errors[0]?.message) ||
          "Send failed. Please try again.";
        throw new Error(msg);
      }
    } catch (err) {
      setStatus({
        type: "error",
        msg: err?.message || "Send failed. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" required />
        <label htmlFor="consent" className="consent-label">
          I agree to be contacted about my request.
        </label>
      </div>

      {/* Honeypots (either is fine; having both is extra-safe) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mb-4 flex justify-center sm:justify-start">
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
