import React, { useState } from "react";

const EMAIL = "arkapravasantra17@gmail.com";
const WEB3FORMS_ACCESS_KEY = "303351ab-2fe2-4ba5-b29d-52b298f933d7";

const contactMethods = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    label: "Phone",
    value: "+91-9609356564",
    href: "tel:+919609356564",
  },
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

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        console.error("Web3Forms error", data);
      }
    } catch (err) {
      setStatus("error");
      console.error("Form submit failed", err);
    }
  };

  const handleChange = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const fields = [
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
      placeholder: "Tell me about your project...",
      tag: "textarea",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-root {
          min-height: 100vh;
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: #fff;
        }
        .ct-bg-orb-1 {
          position: absolute; top: 0; right: 0;
          width: 600px; height: 500px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .ct-bg-orb-2 {
          position: absolute; bottom: 0; left: 0;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .ct-bg-orb-3 {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 300px;
          background: radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: 0;
        }
        .ct-bg-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }
        .ct-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
          padding: 80px 48px 100px;
        }

        /* Header */
        .ct-header {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 64px;
          opacity: 0; animation: ctFadeUp 0.7s ease forwards 0.1s;
        }
        .ct-eyebrow {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .ct-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .ct-eyebrow-text {
          font-size: 11px; font-weight: 500; color: #818cf8;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .ct-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height: 1; letter-spacing: -2px; color: #fff; margin: 0;
        }
        .ct-title-accent {
          background: linear-gradient(135deg, #818cf8 0%, #67e8f9 60%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .ct-header-sub {
          margin-top: 14px; font-size: 13px;
          color: rgba(255,255,255,0.25); font-weight: 300; line-height: 1.6;
        }
        .ct-header-num {
          font-family: 'Syne', sans-serif; font-size: 120px; font-weight: 800;
          line-height: 1; color: rgba(255,255,255,0.03);
          letter-spacing: -4px; user-select: none;
        }

        /* Body */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          opacity: 0; animation: ctFadeUp 0.7s ease forwards 0.2s;
        }

        /* Left panel */
        .ct-left {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          display: flex; flex-direction: column;
          position: relative;
        }
        .ct-left::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .ct-left-top {
          padding: 32px 32px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ct-avail {
          display: flex; align-items: center; gap: 8px;
          font-size: 9px; letter-spacing: 2.5px;
          text-transform: uppercase; color: #4ade80;
          margin-bottom: 20px; font-weight: 500;
        }
        .ct-avail-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80; animation: ctBlink 2s infinite;
        }
        @keyframes ctBlink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .ct-intro {
          font-size: 14px; line-height: 1.85;
          color: rgba(255,255,255,0.4); font-weight: 300;
        }
        .ct-intro strong { color: rgba(255,255,255,0.8); font-weight: 500; }

        .ct-methods-head {
          display: grid;
          grid-template-columns: 90px 1fr 24px;
          gap: 12px; padding: 10px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ct-methods-head span {
          font-size: 8px; letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.15); font-weight: 400;
        }
        .ct-method-row {
          display: grid;
          grid-template-columns: 90px 1fr 24px;
          align-items: center; gap: 12px;
          padding: 16px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          text-decoration: none;
          transition: background 0.2s;
          position: relative; overflow: hidden;
        }
        .ct-method-row:last-child { border-bottom: none; }
        .ct-method-row::before {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(180deg, #818cf8, #67e8f9);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.25s;
        }
        .ct-method-row:hover { background: rgba(255,255,255,0.04); }
        .ct-method-row:hover::before { transform: scaleY(1); }
        .ct-method-label {
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); font-weight: 500; transition: color 0.2s;
        }
        .ct-method-row:hover .ct-method-label { color: #818cf8; }
        .ct-method-value {
          font-size: 11px; color: rgba(255,255,255,0.55);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
          transition: color 0.2s;
        }
        .ct-method-row:hover .ct-method-value { color: rgba(255,255,255,0.85); }
        .ct-method-arrow {
          font-size: 12px; color: rgba(255,255,255,0.15);
          opacity: 0; transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .ct-method-row:hover .ct-method-arrow { opacity: 1; transform: translateX(0); color: #818cf8; }

        /* Right panel */
        .ct-right {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 32px;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
        }
        .ct-right::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #67e8f9, #a78bfa);
        }
        .ct-form-heading {
          font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
          color: rgba(255,255,255,0.25); letter-spacing: 2.5px;
          text-transform: uppercase; margin-bottom: 24px;
        }
        .ct-form { display: flex; flex-direction: column; gap: 0; }

        .ct-field {
          border: 1px solid rgba(255,255,255,0.07);
          margin-bottom: -1px;
          position: relative;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.2s, background 0.2s;
        }
        .ct-field:first-child { border-radius: 10px 10px 0 0; }
        .ct-field:last-of-type { border-radius: 0 0 10px 10px; }
        .ct-field.is-focused { border-color: rgba(129,140,248,0.4); z-index: 2; background: rgba(129,140,248,0.04); }
        .ct-field.has-error  { border-color: rgba(248,113,113,0.4); z-index: 2; }

        .ct-field-label {
          display: block; font-size: 8px; letter-spacing: 2.5px;
          text-transform: uppercase; color: rgba(255,255,255,0.2);
          padding: 12px 16px 0; transition: color 0.2s;
        }
        .ct-field.is-focused .ct-field-label { color: #818cf8; }
        .ct-field.has-error   .ct-field-label { color: #f87171; }

        .ct-input, .ct-textarea {
          width: 100%; background: transparent; border: none; outline: none;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.85); padding: 8px 16px 14px; resize: none; display: block;
        }
        .ct-input::placeholder, .ct-textarea::placeholder { color: rgba(255,255,255,0.15); }
        .ct-field-error {
          font-size: 8px; letter-spacing: 1.5px; text-transform: uppercase;
          color: #f87171; padding: 0 16px 8px; display: block;
        }

        .ct-submit {
          margin-top: 14px;
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; border-radius: 100px;
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500; padding: 14px 32px;
          cursor: pointer; transition: all 0.25s; width: 100%;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
        }
        .ct-submit:not(:disabled):hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.5); }
        .ct-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .ct-submit-arrow { transition: transform 0.2s; }
        .ct-submit:not(:disabled):hover .ct-submit-arrow { transform: translateX(4px); }

        /* Success */
        .ct-success {
          flex: 1; display: flex; flex-direction: column;
          justify-content: center; gap: 16px;
          border: 1px solid rgba(74,222,128,0.15);
          background: rgba(74,222,128,0.04);
          border-radius: 12px; padding: 40px 32px;
        }
        .ct-success-check {
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(74,222,128,0.12);
          border: 1px solid rgba(74,222,128,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; color: #4ade80;
        }
        .ct-success-title {
          font-family: 'Syne', sans-serif; font-size: 28px;
          font-weight: 800; color: #fff; letter-spacing: -0.5px; line-height: 1;
        }
        .ct-success-sub {
          font-size: 13px; font-weight: 300;
          color: rgba(255,255,255,0.35); line-height: 1.7;
        }

        .ct-form-error {
          border: 1px solid rgba(248,113,113,0.25);
          background: rgba(248,113,113,0.08);
          border-radius: 12px;
          padding: 16px 18px;
          margin-bottom: 18px;
          color: #f87171;
          font-size: 13px;
          line-height: 1.5;
        }

        /* Footer */
        .ct-footer {
          margin-top: 32px; padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; justify-content: space-between; align-items: center;
          opacity: 0; animation: ctFadeUp 0.7s ease forwards 0.4s;
        }
        .ct-foot-note {
          font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 0.5px;
        }
        .ct-foot-status {
          display: flex; align-items: center; gap: 7px;
          font-size: 9px; font-weight: 500; letter-spacing: 2px;
          text-transform: uppercase; color: #4ade80;
        }
        .ct-foot-status-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #4ade80; animation: ctBlink 2s infinite;
        }

        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .ct-inner { padding: 56px 24px 72px; }
          .ct-header { margin-bottom: 40px; }
          .ct-header-num { display: none; }
          .ct-body { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .ct-inner { padding: 40px 20px 56px; }
          .ct-title { font-size: 38px; }
          .ct-left-top { padding: 24px 22px 20px; }
          .ct-methods-head { display: none; }
          .ct-method-row { padding: 14px 22px; grid-template-columns: 80px 1fr 20px; }
          .ct-right { padding: 24px 22px; }
          .ct-footer { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>

      <section id="contact" className="ct-root">
        <div className="ct-bg-orb-1" />
        <div className="ct-bg-orb-2" />
        <div className="ct-bg-orb-3" />
        <div className="ct-bg-grid" />

        <div className="ct-inner">
          {/* Header */}
          <div className="ct-header">
            <div>
              <div className="ct-eyebrow">
                <div className="ct-eyebrow-line" />
                <span className="ct-eyebrow-text">Get in Touch</span>
              </div>
              <h2 className="ct-title">
                Let's <span className="ct-title-accent">Connect</span>
              </h2>
              <p className="ct-header-sub">
                Open to freelance, full-time roles and great conversations.
              </p>
            </div>
            <div className="ct-header-num">↗</div>
          </div>

          {/* Body */}
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

              <div className="ct-methods-head">
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
              <div className="ct-form-heading">Send a Message</div>

              {status === "sent" ? (
                <div className="ct-success">
                  <div className="ct-success-check">✓</div>
                  <div className="ct-success-title">Message Received</div>
                  <p className="ct-success-sub">
                    Thanks for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <>
                  {status === "error" && (
                    <div className="ct-form-error">
                      Something went wrong while sending your message. Please
                      try again in a moment.
                    </div>
                  )}

                  <form className="ct-form" onSubmit={handleSubmit} noValidate>
                    {fields.map((f) => (
                      <div
                        key={f.id}
                        className={`ct-field${focused === f.id ? " is-focused" : ""}${errors[f.id] ? " has-error" : ""}`}
                      >
                        <label
                          className="ct-field-label"
                          htmlFor={"ct-" + f.id}
                        >
                          {f.label}
                        </label>
                        {f.tag === "input" ? (
                          <input
                            id={"ct-" + f.id}
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
                            id={"ct-" + f.id}
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
                        {status === "sending" ? "Sending..." : "Send Message"}
                      </span>
                      <span className="ct-submit-arrow">→</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="ct-footer">
            <span className="ct-foot-note">Response within 24 hours</span>
            <span className="ct-foot-status">
              <span className="ct-foot-status-dot" />
              Open to work
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
