"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Contact() {
  const router = useRouter();
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
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image — same treatment as booking */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/pic2.jpeg"
          alt="Langtang Valley"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#060d14]/75" />
      </div>

      {/* Navbar on top */}
      <div className="relative z-20">
        <Navbar transparent />
      </div>

      {/* Page content */}
      <div className="relative z-10 flex-1 flex items-start justify-center px-4 pb-20 pt-8">
        <div className="w-full max-w-[560px]">
          {/* Header */}
          <div className="text-center m-10">
            <h1 className="text-[2.4rem] font-extrabold tracking-tight leading-none text-white mb-3">
              Get in Touch
            </h1>
            <p className="text-sm text-white/40">
              Tell us about your dream trek and we'll craft the perfect plan for
              you.
            </p>
          </div>

          {submitted ? (
            /* ── Success state ── */
            <div
              className="rounded-2xl p-12 text-center"
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
                Thanks,{" "}
                <span className="text-white font-semibold">
                  {form.firstName}
                </span>
                ! Our team will respond to{" "}
                <span className="text-white font-semibold">{form.email}</span>{" "}
                within 24 hours.
              </p>
              <div
                className="h-px mb-8"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <button
                onClick={() => setSubmitted(false)}
                className="px-7 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
                style={{
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
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              <div className="flex flex-col gap-5">
                {/* Title */}
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Send a Message
                  </h2>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "rgba(232,244,251,0.45)" }}
                  >
                    We'll get back to you within 24 hours
                  </p>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <DarkField label="First Name">
                    <DarkInput
                      name="firstName"
                      placeholder="John"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </DarkField>
                  <DarkField label="Last Name">
                    <DarkInput
                      name="lastName"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </DarkField>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <DarkField label="Email Address">
                    <DarkInput
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </DarkField>
                  <DarkField label="Phone (optional)">
                    <DarkInput
                      name="phone"
                      type="tel"
                      placeholder="+977 98XXXXXXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </DarkField>
                </div>

                {/* Divider */}
                <div
                  className="h-px"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />

                {/* Message */}
                <DarkField label="Message">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Preferred dates, group size, experience level, or any questions…"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#e8f4fb",
                      boxSizing: "border-box",
                    }}
                  />
                </DarkField>

                {/* WhatsApp direct contact */}
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
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
                  style={{
                    background: "rgba(37,211,102,0.1)",
                    border: "1px solid rgba(37,211,102,0.22)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(37,211,102,0.16)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(37,211,102,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(37,211,102,0.1)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(37,211,102,0.22)";
                  }}
                >
                  <div className="flex items-center gap-3">
                    {/* WhatsApp SVG icon */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(37,211,102,0.15)" }}
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="#25d366"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">
                        Chat on WhatsApp
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "rgba(232,244,251,0.4)" }}
                      >
                        Get a reply in minutes · +977 9861608237
                      </p>
                    </div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#25d366"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>

                {/* Error */}
                {error && (
                  <div
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-medium"
                    style={{
                      background: "rgba(240,80,80,0.1)",
                      border: "1px solid rgba(240,80,80,0.25)",
                      color: "#f08080",
                    }}
                  >
                    <XCircle size={15} className="shrink-0" />
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
                  style={{
                    background: PRIMARY,
                    boxShadow: "0 4px 20px rgba(1,186,240,0.3)",
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          )}

          <p
            className="text-center text-xs mt-6"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            🔒 Your data is safe with us · We respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Shared dark field components ─────────────────────────── */

function DarkField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <p
        className="text-[10px] uppercase tracking-[0.12em] font-semibold"
        style={{ color: "rgba(232,244,251,0.45)" }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

function DarkInput({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "#e8f4fb",
        boxSizing: "border-box",
      }}
    />
  );
}
