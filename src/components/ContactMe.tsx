import React, { useState } from "react";

const EMAIL = "arkapravasantra17@gmail.com";

const contactMethods = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arkapravadevux",
    href: "https://www.linkedin.com/in/arkapravadevux/",
  },
  {
    label: "Dribbble",
    value: "dribbble.com/imkuttu123",
    href: "https://dribbble.com/imkuttu123",
  },
  {
    label: "Twitter",
    value: "x.com/DevLegend008",
    href: "https://x.com/DevLegend008",
  },
  {
    label: "GitHub",
    value: "github.com/Iamlegend001",
    href: "https://github.com/Iamlegend001",
  },
];

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [focused, setFocused] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        :root {
          --ink:    #111010;
          --paper:  #f0ece3;
          --red:    #c0392b;
          --mid:    #6b6560;
          --border: rgba(17,16,16,0.1);
        }

        :root.dark {
          --ink:    #f0ece3;
          --paper:  #0f0e0d;
          --red:    #ff5247;
          --mid:    #9b9490;
          --border: rgba(240,236,227,0.1);
        }

        .ct-section {
          background: var(--paper);
          font-family: 'DM Mono', monospace;
        }

        .ct-header {
          padding: 72px 48px 56px;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 32px;
        }
        .ct-eyebrow {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ct-eyebrow::before {
          content: '';
          width: 28px; height: 1px;
          background: var(--red);
          display: block;
          flex-shrink: 0;
        }
        .ct-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--ink);
        }
        .ct-title-italic {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          color: var(--red);
          font-size: 0.55em;
          display: block;
          letter-spacing: 0;
          line-height: 1.3;
          margin-top: 6px;
        }
        .ct-meta { text-align: right; }
        .ct-meta-sym {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          line-height: 1;
          color: var(--ink);
          opacity: 0.07;
          letter-spacing: 2px;
        }
        .ct-meta-label {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          margin-top: -8px;
        }

        .ct-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
        }

        /* LEFT */
        .ct-left {
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
        }
        .ct-left-top {
          padding: 40px 48px 32px;
          border-bottom: 1px solid var(--border);
        }
        .ct-avail {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #2ecc71;
          margin-bottom: 16px;
        }
        .ct-avail-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #2ecc71;
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .ct-intro {
          font-size: 13px;
          line-height: 2;
          color: var(--mid);
          font-weight: 300;
          max-width: 380px;
        }
        .ct-intro strong { color: var(--ink); font-weight: 500; }

        .ct-method-head {
          padding: 14px 48px;
          border-bottom: 1px solid var(--border);
          background: rgba(17,16,16,0.02);
          display: grid;
          grid-template-columns: 110px 1fr auto;
          gap: 12px;
        }
        .ct-method-head span {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.6;
        }
        .ct-method-row {
          display: grid;
          grid-template-columns: 110px 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 18px 48px;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          transition: background 0.2s;
          position: relative;
          overflow: hidden;
        }
        .ct-method-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--red);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.25s;
        }
        .ct-method-row:hover { background: rgba(17,16,16,0.025); }
        .ct-method-row:hover::before { transform: scaleY(1); }
        .ct-method-row:last-child { border-bottom: none; }
        .ct-method-label {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.55;
        }
        .ct-method-value {
          font-size: 11px;
          color: var(--ink);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ct-method-arrow {
          font-size: 12px;
          color: var(--mid);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .ct-method-row:hover .ct-method-arrow { opacity: 1; transform: translateX(0); }

        /* RIGHT — form */
        .ct-right {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ct-form-label {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.6;
          margin-bottom: 28px;
          display: block;
        }
        .ct-form { display: flex; flex-direction: column; gap: 0; }

        .ct-field {
          border: 1px solid var(--border);
          margin-bottom: -1px;
          position: relative;
          transition: border-color 0.2s;
        }
        .ct-field.is-focused { border-color: var(--ink); z-index: 2; }
        .ct-field.has-error  { border-color: var(--red); z-index: 2; }

        .ct-field-label {
          display: block;
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.5;
          padding: 12px 16px 0;
          transition: opacity 0.2s;
        }
        .ct-field.is-focused .ct-field-label { opacity: 1; color: var(--ink); }
        .ct-field.has-error   .ct-field-label { color: var(--red); opacity: 1; }

        .ct-input, .ct-textarea {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: var(--ink);
          padding: 8px 16px 14px;
          font-weight: 300;
          resize: none;
          display: block;
        }
        .ct-input::placeholder, .ct-textarea::placeholder {
          color: var(--mid);
          opacity: 0.3;
        }
        .ct-field-error {
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--red);
          padding: 0 16px 8px;
          display: block;
        }

        .ct-submit {
          margin-top: 16px;
          background: var(--ink);
          color: var(--paper);
          padding: 16px 32px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s;
          width: 100%;
        }
        .ct-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--red);
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.77,0,0.175,1);
        }
        .ct-submit:not(:disabled):hover::after { transform: translateX(0); }
        .ct-submit:not(:disabled):hover { transform: translateY(-1px); }
        .ct-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .ct-submit span { position: relative; z-index: 1; }

        /* Success */
        .ct-success {
          border: 1px solid rgba(46,204,113,0.25);
          background: rgba(46,204,113,0.04);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ct-success-check {
          font-size: 28px;
          color: #2ecc71;
          line-height: 1;
        }
        .ct-success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 30px;
          letter-spacing: 2px;
          color: var(--ink);
          line-height: 1;
        }
        .ct-success-sub {
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--mid);
          line-height: 1.8;
        }

        /* Footer */
        .ct-footer {
          padding: 22px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ct-foot-note {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.35;
        }
        .ct-foot-status {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.45;
        }
        .ct-foot-status::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #2ecc71;
          display: block;
        }

        /* ── Responsive ───────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .ct-header {
            padding: 64px 36px 48px;
            gap: 28px;
          }
          .ct-title {
            font-size: clamp(48px, 8vw, 90px);
          }
          .ct-body {
            grid-template-columns: 1fr;
          }
          .ct-left-top {
            padding: 36px 36px 28px;
          }
          .ct-method-head,
          .ct-method-row {
            padding-left: 36px;
            padding-right: 36px;
          }
          .ct-right {
            padding: 36px 36px 44px;
          }
          .ct-footer {
            padding: 20px 36px;
          }
        }

        /* Tablet: 768-1024px */
        @media (max-width: 768px) {
          .ct-header {
            padding: 56px 28px 40px;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .ct-title {
            font-size: clamp(40px, 10vw, 72px);
          }
          .ct-intro {
            font-size: 12px;
            line-height: 1.8;
          }
          .ct-left-top {
            padding: 32px 28px 24px;
          }
          .ct-method-head,
          .ct-method-row {
            padding-left: 28px;
            padding-right: 28px;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .ct-method-row span:last-child {
            display: inline;
          }
          .ct-right {
            padding: 32px 28px 36px;
          }
          .ct-form-label {
            margin-bottom: 24px;
          }
          .ct-footer {
            padding: 18px 28px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        /* Mobile: below 768px */
        @media (max-width: 640px) {
          .ct-section {
            padding: 0;
          }
          .ct-header {
            padding: 48px 20px 36px;
            gap: 20px;
          }
          .ct-title {
            font-size: clamp(32px, 12vw, 56px);
            letter-spacing: 1px;
          }
          .ct-eyebrow {
            font-size: 9px;
            margin-bottom: 14px;
          }
          .ct-eyebrow::before {
            width: 20px;
          }
          .ct-intro {
            font-size: 11px;
            line-height: 1.7;
            max-width: 100%;
          }
          .ct-avail {
            font-size: 8px;
            margin-bottom: 12px;
          }
          .ct-left-top {
            padding: 28px 20px 24px;
          }
          .ct-body {
            grid-template-columns: 1fr;
          }
          .ct-left {
            border-right: none;
          }
          .ct-method-head {
            display: none;
          }
          .ct-method-row {
            padding: 16px 20px;
            grid-template-columns: 1fr;
            gap: 8px;
            align-items: flex-start;
          }
          .ct-method-row:last-child {
            border-bottom: none;
          }
          .ct-method-label {
            font-size: 8px;
            opacity: 0.6;
          }
          .ct-method-value {
            font-size: 10px;
            white-space: normal;
            word-break: break-word;
          }
          .ct-method-arrow {
            display: none;
          }
          .ct-right {
            padding: 28px 20px 32px;
            border-left: none;
            border-top: 1px solid var(--border);
          }
          .ct-form-label {
            font-size: 7px;
            margin-bottom: 20px;
          }
          .ct-input, .ct-textarea {
            padding: 10px 14px 12px;
            font-size: 12px;
          }
          .ct-submit {
            padding: 14px 28px;
            font-size: 9px;
            margin-top: 12px;
          }
          .ct-field-error {
            padding: 0 14px 6px;
            font-size: 7px;
          }
          .ct-success {
            padding: 28px 24px;
          }
          .ct-success-check {
            font-size: 24px;
          }
          .ct-success-title {
            font-size: 24px;
          }
          .ct-success-sub {
            font-size: 9px;
          }
          .ct-footer {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .ct-foot-note {
            font-size: 8px;
          }
          .ct-foot-status {
            font-size: 8px;
          }
        }

        /* Very small: below 380px */
        @media (max-width: 380px) {
          .ct-header {
            padding: 40px 16px 32px;
          }
          .ct-title {
            font-size: 28px;
          }
          .ct-intro {
            font-size: 10px;
          }
          .ct-left-top {
            padding: 24px 16px 20px;
          }
          .ct-method-row {
            padding: 14px 16px;
          }
          .ct-right {
            padding: 24px 16px 28px;
          }
          .ct-input, .ct-textarea {
            padding: 10px 12px;
            font-size: 11px;
          }
          .ct-submit {
            padding: 12px 24px;
          }
          .ct-footer {
            padding: 14px 16px;
          }
        }
      `}</style>

      <section id="contact" className="ct-section">
        <div className="ct-header">
          <div>
            <div className="ct-eyebrow">Get in Touch</div>
            <h2 className="ct-title">
              Contact
              <span className="ct-title-italic">Start a conversation.</span>
            </h2>
          </div>
          <div className="ct-meta">
            <div className="ct-meta-sym">↗</div>
            <div className="ct-meta-label">Reach out</div>
          </div>
        </div>

        <div className="ct-body">
          {/* LEFT */}
          <div className="ct-left">
            <div className="ct-left-top">
              <div className="ct-avail">
                <span className="ct-avail-dot" /> Available for work
              </div>
              <p className="ct-intro">
                I'm open to <strong>freelance projects</strong>,{" "}
                <strong>full-time roles</strong>, and conversations about
                design. If you have a problem worth solving, I'd love to hear
                about it.
              </p>
            </div>

            <div className="ct-method-head">
              <span>Channel</span>
              <span>Address</span>
              <span />
            </div>
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="ct-method-row"
              >
                <span className="ct-method-label">{m.label}</span>
                <span className="ct-method-value">{m.value}</span>
                <span className="ct-method-arrow">↗</span>
              </a>
            ))}
          </div>

          {/* RIGHT */}
          <div className="ct-right">
            <span className="ct-form-label">Send a message</span>

            {status === "sent" ? (
              <div className="ct-success">
                <div className="ct-success-check">✓</div>
                <div className="ct-success-title">Message Received</div>
                <p className="ct-success-sub">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit} noValidate>
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your name",
                    tag: "input",
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "you@example.com",
                    tag: "input",
                  },
                  {
                    id: "message",
                    label: "Message",
                    type: null,
                    placeholder: "Tell me about your project or idea...",
                    tag: "textarea",
                  },
                ].map((f) => (
                  <div
                    key={f.id}
                    className={`ct-field ${focused === f.id ? "is-focused" : ""} ${errors[f.id] ? "has-error" : ""}`}
                  >
                    <label className="ct-field-label" htmlFor={`ct-${f.id}`}>
                      {f.label}
                    </label>
                    {f.tag === "input" ? (
                      <input
                        id={`ct-${f.id}`}
                        type={f.type}
                        className="ct-input"
                        placeholder={f.placeholder}
                        value={form[f.id]}
                        onChange={(e) => handleChange(f.id, e.target.value)}
                        onFocus={() => setFocused(f.id)}
                        onBlur={() => setFocused(null)}
                      />
                    ) : (
                      <textarea
                        id={`ct-${f.id}`}
                        className="ct-textarea"
                        placeholder={f.placeholder}
                        rows={5}
                        value={form[f.id]}
                        onChange={(e) => handleChange(f.id, e.target.value)}
                        onFocus={() => setFocused(f.id)}
                        onBlur={() => setFocused(null)}
                      />
                    )}
                    {errors[f.id] && (
                      <span className="ct-field-error">{errors[f.id]}</span>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="ct-submit"
                  disabled={status === "sending"}
                >
                  <span>
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="ct-footer">
          <span className="ct-foot-note">Response within 24 hours</span>
          <span className="ct-foot-status">Currently open to work</span>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
