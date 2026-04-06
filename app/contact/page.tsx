"use client";

import { useState } from "react";
import Image from "next/image";

const PRIMARY = "#01baf0";
const PRIMARY_DARK = "#0195c5";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.message.trim()) e.message = "Please enter a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const sendToWhatsApp = () => {
    const msg = `Hello! I'd like to get in touch.\n\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    window.open(
      `https://wa.me/+9779861608237?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      sendToWhatsApp();
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/pic2.jpeg"
          alt="Langtang Valley"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#060d14]/75" />
      </div>

      <div className="w-full max-w-[560px] mx-auto px-4 pt-8 pb-16">
        {submitted ? (
          <SuccessCard
            name={form.firstName}
            email={form.email}
            onReset={resetForm}
          />
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-8 mt-12">
              <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                Get in Touch
              </h1>
              <p className="text-sm text-white/40">
                We'll get back to you within 24 hours
              </p>
            </div>

            {/* Form card */}
            <div
              className="rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              {/* Card header */}
              <div
                className="px-6 pt-6 pb-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <h2 className="text-base font-bold text-white tracking-tight">
                  Contact Us
                </h2>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(232,244,251,0.4)" }}
                >
                  Send us a message and we'll respond promptly
                </p>
              </div>

              <div className="px-6 py-6 flex flex-col gap-4">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="First Name"
                    error={errors.firstName}
                    placeholder="John"
                    value={form.firstName}
                    onChange={(v) => update("firstName", v)}
                    autoComplete="given-name"
                  />
                  <InputField
                    label="Last Name"
                    error={errors.lastName}
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(v) => update("lastName", v)}
                    autoComplete="family-name"
                  />
                </div>

                <InputField
                  label="Email Address"
                  error={errors.email}
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  autoComplete="email"
                  inputMode="email"
                />

                <InputField
                  label="Phone / WhatsApp"
                  error={errors.phone}
                  placeholder="+977 98XXXXXXXX"
                  value={form.phone}
                  onChange={(v) => update("phone", v)}
                  autoComplete="tel"
                  inputMode="tel"
                />

                {/* Message */}
                <div>
                  <Label>Message</Label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your plans, questions, or anything else…"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full mt-0 rounded-xl px-4 py-3 resize-none outline-none transition-all duration-200"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${
                        errors.message ? "#f06060" : "rgba(255,255,255,0.1)"
                      }`,
                      color: "#e8f4fb",
                      boxSizing: "border-box",
                      WebkitAppearance: "none",
                    }}
                  />
                  {errors.message && (
                    <p className="text-xs mt-1.5" style={{ color: "#f08080" }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 py-3 rounded-xl font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      fontSize: "16px",
                      background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                      boxShadow: "0 4px 24px rgba(1,186,240,0.3)",
                    }}
                  >
                    Send Message
                  </button>

                  <button
                    onClick={() => {
                      if (!validate()) return;
                      sendToWhatsApp();
                    }}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      fontSize: "16px",
                      background: "rgba(37,211,102,0.12)",
                      border: "1px solid rgba(37,211,102,0.3)",
                      color: "#25d366",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <p
              className="text-center text-xs mt-6"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              🔒 Your data is safe with us · We respond within 24 hours
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-semibold uppercase tracking-widest mb-1.5"
      style={{ fontSize: "10px", color: "rgba(232,244,251,0.4)" }}
    >
      {children}
    </p>
  );
}

function InputField({
  label,
  error,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
  inputMode,
}: {
  label: string;
  error: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-xl px-4 outline-none transition-all duration-200"
        style={{
          fontSize: "16px",
          height: "48px",
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${error ? "#f06060" : "rgba(255,255,255,0.1)"}`,
          color: "#e8f4fb",
          boxSizing: "border-box",
          WebkitAppearance: "none",
        }}
      />
      {error && (
        <p className="text-xs mt-1.5" style={{ color: "#f08080" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessCard({
  name,
  email,
  onReset,
}: {
  name: string;
  email: string;
  onReset: () => void;
}) {
  return (
    <div
      className="rounded-2xl p-8 text-center mx-auto max-w-md mt-16"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white font-bold mx-auto mb-6"
        style={{
          background: PRIMARY,
          boxShadow: "0 0 32px rgba(1,186,240,0.4)",
        }}
      >
        ✓
      </div>
      <h2 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
        Message Sent!
      </h2>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: "rgba(232,244,251,0.5)" }}
      >
        Thank you, <span className="text-white font-semibold">{name}</span>!
        We'll reach out at{" "}
        <span className="text-white font-semibold">{email}</span> within 24
        hours.
      </p>
      <div
        className="h-px mb-6"
        style={{ background: "rgba(255,255,255,0.07)" }}
      />
      <button
        onClick={onReset}
        className="px-7 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
        style={{
          fontSize: "16px",
          background: PRIMARY,
          boxShadow: "0 4px 20px rgba(1,186,240,0.3)",
        }}
      >
        Send Another Message
      </button>
    </div>
  );
}
