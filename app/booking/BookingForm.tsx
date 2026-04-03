"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import Image from "next/image";

const trips = [
  "Langtang Valley Trek",
  "Kyanjin Gompa Day Hike",
  "Custom / Private Tour",
];

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
    trip: "",
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

  const sendToWhatsApp = (data: typeof form & { addons: string[] }) => {
    const msg = `New Booking Request\n\nName: ${data.firstName} ${
      data.lastName
    }\nTrip: ${data.trip}\nDate: ${data.startDate}\nAdd-ons: ${data.addons.join(
      ", "
    )}`;
    window.open(
      `https://wa.me/+9779861608237?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

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
      sendToWhatsApp({ ...form, addons });
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
    <div className="relative min-h-screen flex items-start justify-center font-sans overflow-hidden">
      {/* Background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/pic2.jpeg"
          alt="Langtang Valley"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-[#060d14]/75" />
      </div>

      {/* Subtle grid overlay */}

      {/* Content */}
      <div className="relative z-10 w-full max-w-[600px] px-4 py-8 pb-20">
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
            <div className="text-center m-10">
              <h1 className="text-[2.4rem] font-extrabold tracking-tight leading-none text-white mb-3">
                Book Your Adventure
              </h1>
              <p className="text-sm text-white/40">
                Fill in your details and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Step progress */}
            <div className="flex items-center justify-center gap-0 mb-8">
              {stepLabels.map((label, i) => {
                const s = i + 1;
                const done = step > s;
                const active = step === s;
                return (
                  <div key={s} className="flex items-center gap-0">
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
                        className="text-[10px] uppercase tracking-wider whitespace-nowrap transition-colors duration-300"
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
                        className="w-16 h-px mb-5 mx-1 transition-all duration-300"
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

            {/* Form card */}
            <div
              className="rounded-2xl p-8 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                opacity: animIn ? 1 : 0,
                transform: animIn ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {step === 1 && (
                <Step
                  title="Personal Information"
                  desc="Tell us a bit about yourself"
                >
                  <TwoCol>
                    <InputField
                      label="First Name"
                      error={errors.firstName}
                      placeholder="John"
                      value={form.firstName}
                      onChange={(v) => update("firstName", v)}
                    />
                    <InputField
                      label="Last Name"
                      error={errors.lastName}
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={(v) => update("lastName", v)}
                    />
                  </TwoCol>
                  <InputField
                    label="Email Address"
                    error={errors.email}
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                  />
                  <InputField
                    label="Phone / WhatsApp"
                    error={errors.phone}
                    placeholder="+977 98XXXXXXXX"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                  />
                  <InputField
                    label="Country of Residence"
                    error={errors.country}
                    placeholder="Nepal, USA, UK…"
                    value={form.country}
                    onChange={(v) => update("country", v)}
                  />
                  <div className="flex justify-end pt-1">
                    <PrimaryBtn onClick={nextStep}>Continue →</PrimaryBtn>
                  </div>
                </Step>
              )}

              {step === 2 && (
                <Step
                  title="Trip Details"
                  desc="Choose your trek and preferences"
                >
                  {addons.length === 0 ? (
                    <SelectField
                      label="Select Trip"
                      error={errors.trip}
                      value={form.trip}
                      onChange={(v) => update("trip", v)}
                      options={trips}
                      placeholder="— Choose a trek —"
                    />
                  ) : (
                    <div>
                      <Label>Selected Trip</Label>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        {addons.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1.5 rounded-lg font-medium"
                            style={{
                              background: "rgba(1,186,240,0.15)",
                              color: PRIMARY,
                              border: "1px solid rgba(1,186,240,0.25)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <TwoCol>
                    <InputField
                      label="Preferred Start Date"
                      error={errors.startDate}
                      type="date"
                      min={today}
                      value={form.startDate}
                      onChange={(v) => update("startDate", v)}
                    />
                    <InputField
                      label="Duration (days)"
                      error=""
                      type="number"
                      placeholder="e.g. 7"
                      value={form.duration}
                      onChange={(v) => update("duration", v)}
                    />
                  </TwoCol>
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
                  <NavRow>
                    <GhostBtn onClick={prevStep}>← Back</GhostBtn>
                    <PrimaryBtn onClick={nextStep}>Continue →</PrimaryBtn>
                  </NavRow>
                </Step>
              )}

              {step === 3 && (
                <Step
                  title="Review & Confirm"
                  desc="Double-check your booking details"
                >
                  {/* Summary */}
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
                      <SummaryRow
                        label="Trek"
                        value={form.trip || addons.join(", ")}
                      />
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

                  {/* Notes */}
                  <div>
                    <Label>Special Requests / Notes</Label>
                    <textarea
                      rows={3}
                      placeholder="Dietary needs, medical conditions, special requests…"
                      value={form.specialRequests}
                      onChange={(e) =>
                        update("specialRequests", e.target.value)
                      }
                      className="w-full mt-1.5 rounded-xl px-4 py-3 text-sm resize-none outline-none transition-all duration-200 focus:ring-1"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#e8f4fb",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.agreeTerms}
                        onChange={(e) => update("agreeTerms", e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded"
                        style={{ accentColor: PRIMARY }}
                      />
                      <span
                        className="text-sm"
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
                        className="text-xs mt-1.5"
                        style={{ color: "#f08080" }}
                      >
                        {errors.agreeTerms}
                      </p>
                    )}
                  </div>

                  <NavRow>
                    <GhostBtn onClick={prevStep}>← Back</GhostBtn>
                    <button
                      onClick={handleSubmit}
                      className="px-7 py-3 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                      style={{
                        background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                        boxShadow: "0 4px 24px rgba(1,186,240,0.35)",
                      }}
                    >
                      Confirm Booking ✓
                    </button>
                  </NavRow>
                </Step>
              )}
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

/* ── Sub-components ─────────────────────────────────────────── */

function Step({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
        <p className="text-sm mt-1" style={{ color: "rgba(232,244,251,0.45)" }}>
          {desc}
        </p>
      </div>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] uppercase tracking-[0.12em] font-semibold mb-1.5"
      style={{ color: "rgba(232,244,251,0.45)" }}
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
  min,
}: {
  label: string;
  error: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  min?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        min={min}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-1"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${error ? "#f06060" : "rgba(255,255,255,0.1)"}`,
          color: "#e8f4fb",
          boxSizing: "border-box",
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

function SelectField({
  label,
  error,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  error: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none appearance-none cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${error ? "#f06060" : "rgba(255,255,255,0.1)"}`,
          color: value ? "#e8f4fb" : "rgba(232,244,251,0.35)",
          boxSizing: "border-box",
        }}
      >
        <option value="" style={{ background: "#0d1b26" }}>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} style={{ background: "#0d1b26" }}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs mt-1.5" style={{ color: "#f08080" }}>
          {error}
        </p>
      )}
    </div>
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
    <div>
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className="px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150"
              style={{
                background: active
                  ? "rgba(1,186,240,0.15)"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  active ? "#01baf0" : "rgba(255,255,255,0.09)"
                }`,
                color: active ? "#01baf0" : "rgba(232,244,251,0.45)",
              }}
            >
              {o}
            </button>
          );
        })}
      </div>
      {error && (
        <p className="text-xs mt-1.5" style={{ color: "#f08080" }}>
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
        className="text-[9px] uppercase tracking-[0.15em] font-bold mb-3"
        style={{ color: "#01baf0" }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <span
        className="text-xs shrink-0"
        style={{ color: "rgba(232,244,251,0.4)" }}
      >
        {label}
      </span>
      <span className="text-xs font-semibold text-right text-white/80">
        {value || "—"}
      </span>
    </div>
  );
}

function TwoCol({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

function NavRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center pt-1">{children}</div>
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
      className="px-7 py-3 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
      style={{
        background: "#01baf0",
        boxShadow: "0 4px 20px rgba(1,186,240,0.3)",
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
      className="px-5 py-3 rounded-xl text-sm transition-all duration-150 hover:text-white/70"
      style={{
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "rgba(232,244,251,0.45)",
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
      className="rounded-2xl p-12 text-center mx-auto max-w-md"
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
          background: "#01baf0",
          boxShadow: "0 0 32px rgba(1,186,240,0.4)",
        }}
      >
        ✓
      </div>
      <h2 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
        Booking Request Sent!
      </h2>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: "rgba(232,244,251,0.5)" }}
      >
        Thank you, <span className="text-white font-semibold">{name}</span>!
        We've received your request for{" "}
        <span className="text-white font-semibold">{trip}</span>.<br />
        We'll reach out at{" "}
        <span className="text-white font-semibold">{email}</span> within 24
        hours.
      </p>
      <div
        className="h-px mb-5"
        style={{ background: "rgba(255,255,255,0.07)" }}
      />
      <p className="text-xs mb-8" style={{ color: "rgba(232,244,251,0.25)" }}>
        Reference ID: LOI-{Date.now().toString(36).toUpperCase()}
      </p>
      <button
        onClick={onReset}
        className="px-7 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
        style={{
          background: "#01baf0",
          boxShadow: "0 4px 20px rgba(1,186,240,0.3)",
        }}
      >
        Make Another Booking
      </button>
    </div>
  );
}
