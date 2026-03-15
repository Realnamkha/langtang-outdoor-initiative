"use client";

import { useState } from "react";
import { Send, CheckCircle2, XCircle } from "lucide-react";
import Navbar from "../components/navbar";
import { Field } from "@/components/ui/Field";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactInfo {
  address: string;
  city: string;
  phones: string[];
  emails: string[];
  mapUrl: string;
}

interface ContactPageProps {
  contactInfo?: ContactInfo;
}

// ─── Default Data ─────────────────────────────────────────────────────────────

const inputClass =
  "w-full bg-white border border-[#dde8f0] rounded-xl px-4 py-3.5 text-[14.5px] text-[#0a1628] outline-none transition-all duration-200 placeholder:text-[#b8ccd8] focus:border-[#01baf0] focus:ring-2 focus:ring-[#01baf0]/12 hover:border-[#01baf0]/50";

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Contact({}: ContactPageProps) {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-form-card { animation: fadeUp 0.7s 0.05s ease both; }

        /* Remove select default arrow on all browsers */
        select { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
      `}</style>

      <div
        className="min-h-screen bg-[#f0f7fc]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <Navbar transparent={false} />

        <div className="max-w-2xl mx-auto px-5 py-16 md:py-24">
          <div className="contact-form-card">
            {/* Header */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#01baf0] mb-2">
                Get in Touch
              </p>
              <h2
                className="text-[#0a1628] text-[32px] font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Plan Your Adventure
              </h2>
              <p className="text-[14px] text-[#7a90a8] mt-2 leading-relaxed">
                Tell us about your dream trek and we&apos;ll craft the perfect
                plan for you.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_24px_rgba(1,186,240,0.08),0_1px_4px_rgba(10,22,40,0.05)] border border-[#dde8f0]">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <Field label="First Name">
                  <input
                    name="firstName"
                    className={inputClass}
                    placeholder="Thupten"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Last Name">
                  <input
                    name="lastName"
                    className={inputClass}
                    placeholder="Lama"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <Field label="Email Address">
                  <input
                    name="email"
                    type="email"
                    className={inputClass}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    name="phone"
                    type="tel"
                    className={inputClass}
                    placeholder="+977 984 000 0000 (Optional)"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              {/* Thin divider */}
              <div className="border-t border-[#edf2f7] mb-5" />

              {/* Message */}
              <Field label="Message" className="mb-7">
                <textarea
                  name="message"
                  className={`${inputClass} resize-none`}
                  rows={4}
                  placeholder="Preferred dates, group size, experience level, or any questions…"
                  value={form.message}
                  onChange={handleChange}
                />
              </Field>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2.5 bg-[#01baf0] hover:bg-[#0199cc] active:bg-[#0188b5] text-white text-[14.5px] font-medium py-4 rounded-xl cursor-pointer shadow-[0_4px_18px_rgba(1,186,240,0.32)] hover:shadow-[0_6px_24px_rgba(1,186,240,0.42)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send size={15} strokeWidth={2.2} />
                Send Message
              </button>

              {/* Success toast */}
              {submitted && (
                <div className="mt-4 flex items-center gap-2.5 px-4 py-3.5 bg-[#e6f8fe] border border-[#01baf0]/25 rounded-xl text-[#0199cc] text-[13.5px] font-medium">
                  <CheckCircle2 size={17} className="shrink-0" />
                  Message sent! Our team will respond within 24 hours.
                </div>
              )}
              {error && (
                <div className="mt-4 flex items-center gap-2.5 px-4 py-3.5 bg-red-50 border border-red-200 rounded-xl text-red-600 text-[13.5px] font-medium">
                  <XCircle size={17} className="flex-shrink-0" />
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
