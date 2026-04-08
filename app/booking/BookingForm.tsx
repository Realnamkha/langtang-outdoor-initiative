"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const groupSizes = [
  "Solo (1)",
  "Couple (2)",
  "Small Group (3–5)",
  "Large Group (6+)",
];
const accommodations = ["Teahouse / Lodge", "Camping", "Mix of Both"];
const fitnessLevels = ["Beginner", "Intermediate", "Advanced"];

const PRIMARY = "#01baf0";
const PRIMARY_DARK = "#0195c5";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const addons = useMemo(
    () => searchParams.get("addons")?.split(",").filter(Boolean) || [],
    [searchParams]
  );

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [animIn, setAnimIn] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    trip: addons.join(", "),
    startDate: "",
    duration: "",
    groupSize: "",
    accommodation: "",
    fitnessLevel: "",
    specialRequests: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validateStep = () => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!form.firstName.trim()) e.firstName = "Required";
      if (!form.lastName.trim()) e.lastName = "Required";
      if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        e.email = "Valid email required";
      if (!form.phone.trim()) e.phone = "Required";
      if (!form.country.trim()) e.country = "Required";
    }
    if (step === 2) {
      if (!form.trip.trim()) e.trip = "Please describe your trek";
      if (!form.startDate) e.startDate = "Please pick a date";
      if (!form.groupSize) e.groupSize = "Please select group size";
      if (!form.accommodation) e.accommodation = "Please select accommodation";
      if (!form.fitnessLevel) e.fitnessLevel = "Please select fitness level";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const transition = (fn: () => void) => {
    setAnimIn(false);
    setTimeout(() => {
      fn();
      setAnimIn(true);
    }, 180);
  };

  const nextStep = () => {
    if (validateStep()) transition(() => setStep((s) => s + 1));
  };
  const prevStep = () => transition(() => setStep((s) => s - 1));

  const handleSubmit = async () => {
    if (!form.agreeTerms) {
      setErrors({ agreeTerms: "You must agree to continue" });
      return;
    }
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, addons }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      trip: "",
      startDate: "",
      duration: "",
      groupSize: "",
      accommodation: "",
      fitnessLevel: "",
      specialRequests: "",
      agreeTerms: false,
    });
  };

  const today = new Date().toISOString().split("T")[0];
  const stepLabels = ["Personal Info", "Trip Details", "Confirm"];

  return (
    <div className="relative min-h-screen">
      {/* Background — fixed, keyboard never moves it */}
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

      <div className="w-full max-w-[520px] mx-auto px-4 pt-8 pb-16">
        {submitted ? (
          <SuccessCard
            name={form.firstName}
            trip={form.trip}
            email={form.email}
            onReset={resetForm}
          />
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-4 mt-12">
              <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                Book Your Adventure
              </h1>
              <p className="text-sm text-white/40">
                Fill in your details and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Step indicators */}
            <div className="flex items-center justify-center mb-8">
              {stepLabels.map((label, i) => {
                const s = i + 1;
                const done = step > s;
                const active = step === s;
                return (
                  <div key={s} className="flex items-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                        style={{
                          background:
                            done || active ? PRIMARY : "rgba(255,255,255,0.07)",
                          border: `1.5px solid ${
                            done || active ? PRIMARY : "rgba(255,255,255,0.12)"
                          }`,
                          color:
                            done || active ? "#fff" : "rgba(255,255,255,0.35)",
                          boxShadow: active
                            ? `0 0 18px rgba(1,186,240,0.4)`
                            : "none",
                        }}
                      >
                        {done ? "✓" : s}
                      </div>
                      <span
                        className="text-[9px] uppercase tracking-wider whitespace-nowrap"
                        style={{
                          color: active
                            ? PRIMARY
                            : done
                            ? "rgba(255,255,255,0.5)"
                            : "rgba(255,255,255,0.25)",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                    {s < 3 && (
                      <div
                        className="w-10 sm:w-16 h-px mb-5 mx-1 transition-all duration-300"
                        style={{
                          background:
                            step > s ? PRIMARY : "rgba(255,255,255,0.1)",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Card */}
            <div
              className="rounded-2xl transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                opacity: animIn ? 1 : 0,
                transform: animIn ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {/* Card header */}
              <div
                className="px-5 pt-5 pb-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                {step === 1 && (
                  <StepHeader
                    title="Personal Information"
                    desc="Tell us a bit about yourself"
                  />
                )}
                {step === 2 && (
                  <StepHeader
                    title="Trip Details"
                    desc="Describe your ideal trek"
                  />
                )}
                {step === 3 && (
                  <StepHeader
                    title="Review & Confirm"
                    desc="Double-check your booking details"
                  />
                )}
              </div>

              <div className="px-5 py-5 flex flex-col gap-5">
                {/* ── STEP 1 ── */}
                {step === 1 && (
                  <>
                    <Field label="First Name" error={errors.firstName}>
                      <Input
                        placeholder="John"
                        value={form.firstName}
                        onChange={(v) => update("firstName", v)}
                        autoComplete="given-name"
                      />
                    </Field>

                    <Field label="Last Name" error={errors.lastName}>
                      <Input
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={(v) => update("lastName", v)}
                        autoComplete="family-name"
                      />
                    </Field>

                    <Field label="Email Address" error={errors.email}>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(v) => update("email", v)}
                        autoComplete="email"
                        inputMode="email"
                      />
                    </Field>

                    <Field label="Phone / WhatsApp" error={errors.phone}>
                      <Input
                        type="tel"
                        placeholder="+977 98XXXXXXXX"
                        value={form.phone}
                        onChange={(v) => update("phone", v)}
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </Field>

                    <Field label="Country of Residence" error={errors.country}>
                      <Input
                        placeholder="Nepal, USA, UK…"
                        value={form.country}
                        onChange={(v) => update("country", v)}
                        autoComplete="country-name"
                      />
                    </Field>

                    <PrimaryBtn onClick={nextStep}>Continue →</PrimaryBtn>
                  </>
                )}

                {/* ── STEP 2 ── */}
                {step === 2 && (
                  <>
                    {/* Free-text trek input */}
                    <Field
                      label="What trek are you interested in?"
                      error={errors.trip}
                    >
                      <textarea
                        rows={3}
                        placeholder="e.g. Langtang Valley Trek, Kyanjin Gompa day hike, a custom route through the valley…"
                        value={form.trip}
                        onChange={(e) => update("trip", e.target.value)}
                        className="w-full rounded-xl px-4 py-3 resize-none outline-none"
                        style={{
                          fontSize: "16px",
                          lineHeight: "1.6",
                          background: "rgba(255,255,255,0.06)",
                          border: `1px solid ${
                            errors.trip ? "#f06060" : "rgba(255,255,255,0.12)"
                          }`,
                          color: "#e8f4fb",
                          boxSizing: "border-box",
                          WebkitAppearance: "none",
                        }}
                      />
                      <p
                        className="text-xs"
                        style={{ color: "rgba(232,244,251,0.3)" }}
                      >
                        Describe any trek, itinerary, or custom route you have
                        in mind
                      </p>
                    </Field>

                    <Field
                      label="Preferred Start Date"
                      error={errors.startDate}
                    >
                      <Input
                        type="date"
                        min={today}
                        value={form.startDate}
                        onChange={(v) => update("startDate", v)}
                      />
                    </Field>

                    <Field label="Duration (days)" error="">
                      <Input
                        type="number"
                        placeholder="e.g. 7"
                        value={form.duration}
                        onChange={(v) => update("duration", v)}
                        inputMode="numeric"
                      />
                    </Field>

                    <ChipField
                      label="Group Size"
                      error={errors.groupSize}
                      options={groupSizes}
                      value={form.groupSize}
                      onChange={(v) => update("groupSize", v)}
                    />
                    <ChipField
                      label="Accommodation"
                      error={errors.accommodation}
                      options={accommodations}
                      value={form.accommodation}
                      onChange={(v) => update("accommodation", v)}
                    />
                    <ChipField
                      label="Fitness Level"
                      error={errors.fitnessLevel}
                      options={fitnessLevels}
                      value={form.fitnessLevel}
                      onChange={(v) => update("fitnessLevel", v)}
                    />

                    <PrimaryBtn onClick={nextStep}>Continue →</PrimaryBtn>
                    <GhostBtn onClick={prevStep}>← Back</GhostBtn>
                  </>
                )}

                {/* ── STEP 3 ── */}
                {step === 3 && (
                  <>
                    <div
                      className="rounded-xl overflow-hidden"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <SummarySection title="Personal Info">
                        <SummaryRow
                          label="Name"
                          value={`${form.firstName} ${form.lastName}`}
                        />
                        <SummaryRow label="Email" value={form.email} />
                        <SummaryRow label="Phone" value={form.phone} />
                        <SummaryRow label="Country" value={form.country} />
                      </SummarySection>
                      <div
                        style={{
                          height: "1px",
                          background: "rgba(255,255,255,0.07)",
                        }}
                      />
                      <SummarySection title="Trip Details">
                        <SummaryRow label="Trek" value={form.trip} />
                        <SummaryRow label="Start Date" value={form.startDate} />
                        {form.duration && (
                          <SummaryRow
                            label="Duration"
                            value={`${form.duration} days`}
                          />
                        )}
                        <SummaryRow label="Group Size" value={form.groupSize} />
                        <SummaryRow
                          label="Accommodation"
                          value={form.accommodation}
                        />
                        <SummaryRow
                          label="Fitness Level"
                          value={form.fitnessLevel}
                        />
                      </SummarySection>
                    </div>

                    <Field label="Special Requests / Notes" error="">
                      <textarea
                        rows={3}
                        placeholder="Dietary needs, medical conditions, special requests…"
                        value={form.specialRequests}
                        onChange={(e) =>
                          update("specialRequests", e.target.value)
                        }
                        className="w-full rounded-xl px-4 py-3 resize-none outline-none"
                        style={{
                          fontSize: "16px",
                          lineHeight: "1.6",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#e8f4fb",
                          boxSizing: "border-box",
                          WebkitAppearance: "none",
                        }}
                      />
                    </Field>

                    {/* Terms */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.agreeTerms}
                          onChange={(e) =>
                            update("agreeTerms", e.target.checked)
                          }
                          style={{
                            accentColor: PRIMARY,
                            width: 20,
                            height: 20,
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(232,244,251,0.55)" }}
                        >
                          I agree to the{" "}
                          <a
                            href="#"
                            style={{ color: PRIMARY }}
                            className="hover:underline"
                          >
                            Terms & Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="#"
                            style={{ color: PRIMARY }}
                            className="hover:underline"
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                      {errors.agreeTerms && (
                        <p
                          className="text-xs mt-2"
                          style={{ color: "#f08080" }}
                        >
                          {errors.agreeTerms}
                        </p>
                      )}
                    </div>

                    {/* Confirm button */}
                    <button
                      onClick={handleSubmit}
                      className="w-full rounded-xl font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                      style={{
                        fontSize: "16px",
                        padding: "15px 0",
                        background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                        boxShadow: "0 4px 24px rgba(1,186,240,0.35)",
                        WebkitAppearance: "none",
                      }}
                    >
                      Confirm Booking ✓
                    </button>
                    <GhostBtn onClick={prevStep}>← Back</GhostBtn>
                  </>
                )}
              </div>
            </div>

            <p
              className="text-center text-xs mt-6 pb-2"
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

/* ── Components ── */

function StepHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <h2 className="text-base font-bold text-white tracking-tight">{title}</h2>
      <p className="text-xs mt-0.5" style={{ color: "rgba(232,244,251,0.4)" }}>
        {desc}
      </p>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error: string;
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
      {error && (
        <p className="text-xs" style={{ color: "#f08080" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  min,
  autoComplete,
  inputMode,
}: {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  min?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <input
      type={type}
      min={min}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete={autoComplete}
      inputMode={inputMode}
      className="w-full rounded-xl px-4 outline-none transition-colors duration-200"
      style={{
        fontSize: "16px" /* prevents iOS auto-zoom */,
        height: "52px" /* comfortable tap target */,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#e8f4fb",
        boxSizing: "border-box",
        WebkitAppearance: "none",
      }}
    />
  );
}

function ChipField({
  label,
  error,
  options,
  value,
  onChange,
}: {
  label: string;
  error: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className="font-semibold uppercase tracking-widest"
        style={{ fontSize: "10px", color: "rgba(232,244,251,0.4)" }}
      >
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className="rounded-xl font-medium transition-all duration-150 active:scale-[0.97]"
              style={{
                fontSize: "14px",
                padding: "10px 16px",
                minHeight: "44px",
                background: active
                  ? "rgba(1,186,240,0.15)"
                  : "rgba(255,255,255,0.05)",
                border: `1px solid ${
                  active ? "#01baf0" : "rgba(255,255,255,0.1)"
                }`,
                color: active ? "#01baf0" : "rgba(232,244,251,0.5)",
              }}
            >
              {o}
            </button>
          );
        })}
      </div>
      {error && (
        <p className="text-xs" style={{ color: "#f08080" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function SummarySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 py-4" style={{ background: "rgba(255,255,255,0.02)" }}>
      <p
        className="uppercase font-bold mb-3"
        style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#01baf0" }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span
        className="text-xs shrink-0 pt-0.5"
        style={{ color: "rgba(232,244,251,0.4)" }}
      >
        {label}
      </span>
      <span
        className="text-xs font-semibold text-right text-white/80 break-words"
        style={{ maxWidth: "60%" }}
      >
        {value || "—"}
      </span>
    </div>
  );
}

function PrimaryBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
      style={{
        fontSize: "16px",
        padding: "15px 0",
        background: PRIMARY,
        boxShadow: "0 4px 20px rgba(1,186,240,0.3)",
        WebkitAppearance: "none",
      }}
    >
      {children}
    </button>
  );
}

function GhostBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl transition-all duration-150"
      style={{
        fontSize: "16px",
        padding: "13px 0",
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "rgba(232,244,251,0.45)",
        WebkitAppearance: "none",
      }}
    >
      {children}
    </button>
  );
}

function SuccessCard({
  name,
  trip,
  email,
  onReset,
}: {
  name: string;
  trip: string;
  email: string;
  onReset: () => void;
}) {
  return (
    <div
      className="relative rounded-2xl p-8 text-center mx-auto max-w-md mt-16"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* X to dismiss */}
      <button
        onClick={onReset}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/30 hover:text-white hover:bg-white/10 transition-all duration-200"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Animated checkmark */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{
          background: "rgba(1,186,240,0.15)",
          border: "2px solid #01baf0",
          boxShadow: "0 0 32px rgba(1,186,240,0.3)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="none"
          stroke="#01baf0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
        Booking Request Sent!
      </h2>

      <p
        className="text-sm leading-relaxed mb-2"
        style={{ color: "rgba(232,244,251,0.5)" }}
      >
        Thank you, <span className="text-white font-semibold">{name}</span>!
      </p>
      <p
        className="text-sm leading-relaxed mb-1"
        style={{ color: "rgba(232,244,251,0.4)" }}
      >
        Your request for{" "}
        <span style={{ color: PRIMARY }} className="font-semibold">
          {trip}
        </span>{" "}
        has been received.
      </p>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: "rgba(232,244,251,0.4)" }}
      >
        We'll reach out at <span style={{ color: PRIMARY }}>{email}</span>{" "}
        within 24 hours.
      </p>

      <div
        className="h-px mb-6"
        style={{ background: "rgba(255,255,255,0.07)" }}
      />

      <p className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
        Reference ID: LOI-{Date.now().toString(36).toUpperCase()}
      </p>
      <a
        href="https://wa.me/+9779761662049"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:opacity-90"
        style={{
          background: "rgba(37,211,102,0.12)",
          border: "1px solid rgba(37,211,102,0.3)",
          color: "#25d366",
          fontSize: "14px",
        }}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Chat on WhatsApp
      </a>
    </div>
  );
}
