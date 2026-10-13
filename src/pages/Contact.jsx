import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljgwoyg";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Message submission failed.");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "We couldn't send your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="inner-page">
      <section className="page-hero">
        <span className="eyebrow">HOME / CONTACT</span>
        <h1>
          TouchIn <span>அரண்</span>
        </h1>
        <p>
          Explore support information and learn where to
          look for assistance.
        </p>
      </section>

      <section className="section-container contact-layout">
        <div className="contact-form-card">
          <span className="eyebrow">CONTACT ARAN</span>
          <h2>Send Us a Message</h2>
          <p>
            Complete the form below to send us a message.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              maxLength={100}
              required
            />

            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              maxLength={254}
              required
            />

            <label htmlFor="contact-subject">Subject</label>
            <select
              id="contact-subject"
              name="subject"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="General Information">
                General Information
              </option>
              <option value="Safety Resources">
                Safety Resources
              </option>
              <option value="Website Feedback">
                Website Feedback
              </option>
            </select>

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Write your message"
              maxLength={3000}
              required
            />

            <button
              className="primary-button"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message ↗"}
            </button>
          </form>

          {submitted && (
            <p className="form-notice" role="status">
              Thank you! Your message was submitted successfully.
            </p>
          )}

          {error && (
            <p className="form-notice" role="alert">
              {error}
            </p>
          )}

          <p className="safety-disclaimer">
            Please do not include passwords, financial details
            or sensitive emergency information. This form is
            not an emergency service.
          </p>
        </div>

        <aside className="contact-info-card">
          <span className="eyebrow">SUPPORT INFORMATION</span>
          <h2>Helpful Contacts</h2>
          <p>
            For urgent assistance, contact the appropriate
            official service directly.
          </p>

          <div className="contact-item">
            <span>☎</span>
            <div>
              <h3>Women's Helpline</h3>
              <p>1938</p>
              <a href="tel:1938" className="text-link">
                Call 1938 ↗
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span>🛡️</span>
            <div>
              <h3>Police Women & Children Bureau</h3>
              <p>Police helpline: 109</p>
              <a
                href="https://www.police.lk/"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Official Police Website ↗
              </a>
            </div>
          </div>

          <div className="contact-note">
            <strong>In immediate danger?</strong>
            <p>
              Contact the appropriate emergency service
              directly. ARAN's contact form does not send
              emergency alerts.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Contact;