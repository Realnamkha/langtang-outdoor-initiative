"use client";

import { useState } from "react";
import { XCircle } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.email || !form.message) {
      setError("Please fill in your name, email and message.");
      setTimeout(() => setError(""), 5000);
      return;
    }
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setError("");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  const PRIMARY = "#01baf0";

  return (
    <div className="relative min-h-screen">
      {/* Background — fixed so it never moves even when keyboard opens */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/pic2.jpeg"
          alt="Langtang Valley"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#060d14]/78" />
      </div>

      {/* Normal flow — root layout Navbar above, Footer below, no conflicts */}
      <div className="flex justify-center px-4 pt-10 pb-16">
        <div className="w-full max-w-[500px]">
          {/* Header */}
          <div className="text-center mb-7">
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
              Get in Touch
            </h1>
            <p className="text-sm text-white/40 leading-relaxed">
              Tell us about your dream trek and we'll craft the perfect plan for
              you.
            </p>
          </div>

          {submitted ? (
            /* ── Success ── */
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl text-white font-bold mx-auto mb-5"
                style={{
                  background: PRIMARY,
                  boxShadow: "0 0 28px rgba(1,186,240,0.4)",
                }}
              >
                ✓
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                Message Sent!
              </h2>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(232,244,251,0.5)" }}
              >
                Thanks,{" "}
                <span className="text-white font-semibold">
                  {form.firstName}
                </span>
                ! Our team will respond to{" "}
                <span className="text-white font-semibold">{form.email}</span>{" "}
                within 24 hours.
              </p>
              <div
                className="h-px mb-6"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
                style={{
                  fontSize: 16,
                  background: PRIMARY,
                  boxShadow: "0 4px 20px rgba(1,186,240,0.3)",
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* ── Form card ── */
            <div
              className="rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Card header */}
              <div
                className="px-5 pt-5 pb-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <h2 className="text-base font-bold text-white tracking-tight">
                  Send a Message
                </h2>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(232,244,251,0.4)" }}
                >
                  We'll get back to you within 24 hours
                </p>
              </div>

              <div className="px-5 py-5 flex flex-col gap-4">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <MobileField label="First Name *">
                    <MobileInput
                      name="firstName"
                      placeholder="John"
                      value={form.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                    />
                  </MobileField>
                  <MobileField label="Last Name">
                    <MobileInput
                      name="lastName"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                    />
                  </MobileField>
                </div>

                {/* Email */}
                <MobileField label="Email Address *">
                  <MobileInput
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                  />
                </MobileField>

                {/* Phone */}
                <MobileField label="Phone (optional)">
                  <MobileInput
                    name="phone"
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </MobileField>

                {/* Message */}
                <MobileField label="Message *">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Preferred dates, group size, experience level, or any questions…"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 resize-none outline-none"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#e8f4fb",
                      boxSizing: "border-box",
                      WebkitAppearance: "none",
                    }}
                  />
                </MobileField>

                <div
                  className="h-px"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />

                {/* WhatsApp */}
                <button
                  onClick={() => {
                    const msg = `Hi! I'd like to know more about your Langtang Valley treks.${
                      form.firstName
                        ? `\n\nName: ${form.firstName} ${form.lastName}`
                        : ""
                    }${form.message ? `\n\nMessage: ${form.message}` : ""}`;
                    window.open(
                      `https://wa.me/+9779843023847?text=${encodeURIComponent(
                        msg
                      )}`,
                      "_blank"
                    );
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl active:scale-[0.98] transition-transform"
                  style={{
                    background: "rgba(37,211,102,0.09)",
                    border: "1px solid rgba(37,211,102,0.2)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(37,211,102,0.14)" }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#25d366"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p
                      className="font-semibold text-white"
                      style={{ fontSize: 14 }}
                    >
                      Chat on WhatsApp
                    </p>
                    <p
                      className="text-xs truncate"
                      style={{ color: "rgba(232,244,251,0.4)" }}
                    >
                      Get a reply in minutes · +977 9861608237
                    </p>
                  </div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#25d366"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>

                {/* Error */}
                {error && (
                  <div
                    className="flex items-start gap-2.5 px-4 py-3 rounded-xl font-medium"
                    style={{
                      fontSize: 13,
                      background: "rgba(240,80,80,0.1)",
                      border: "1px solid rgba(240,80,80,0.25)",
                      color: "#f08080",
                    }}
                  >
                    <XCircle size={15} className="shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full rounded-xl font-bold text-white active:scale-[0.98] transition-transform"
                  style={{
                    fontSize: "16px",
                    padding: "15px 0",
                    background: PRIMARY,
                    boxShadow: "0 4px 24px rgba(1,186,240,0.35)",
                    WebkitAppearance: "none",
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          )}

          <p
            className="text-center text-xs mt-5 pb-4"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            🔒 Your data is safe with us · We respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <p
        className="font-semibold uppercase tracking-widest"
        style={{ fontSize: "10px", color: "rgba(232,244,251,0.4)" }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

function MobileInput({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
  inputMode,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      inputMode={inputMode}
      className="w-full rounded-xl px-4 outline-none"
      style={{
        fontSize: "16px",
        height: "48px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#e8f4fb",
        boxSizing: "border-box",
        WebkitAppearance: "none",
      }}
    />
  );
}
