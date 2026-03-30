"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

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

export default function BookingPage() {
  const searchParams = useSearchParams();
  const addons = searchParams.get("addons")?.split(",") || [];
  console.log("Addons", addons);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
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
  const [animIn, setAnimIn] = useState(true);

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
      // if (!form.trip) e.trip = "Please select a trip";
      if (!form.startDate) e.startDate = "Please pick a date";
      if (!form.groupSize) e.groupSize = "Please select group size";
      if (!form.accommodation) e.accommodation = "Please select accommodation";
      if (!form.fitnessLevel) e.fitnessLevel = "Please select fitness level";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setAnimIn(false);
    setTimeout(() => {
      setStep((s) => s + 1);
      setAnimIn(true);
    }, 200);
  };
  const prevStep = () => {
    setAnimIn(false);
    setTimeout(() => {
      setStep((s) => s - 1);
      setAnimIn(true);
    }, 200);
  };

  const handleSubmit = async () => {
    if (!form.agreeTerms) {
      setErrors({ agreeTerms: "You must agree to continue" });
      return;
    }

    const bookingData = {
      ...form,
      addons,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) throw new Error("Failed");
      sendToWhatsApp(bookingData);

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };
  const sendToWhatsApp = (data: any) => {
    const phoneNumber = "+977 9861608237";

    const message = `
  New Booking Request
  
  Name: ${data.firstName} ${data.lastName}
  Trip: ${data.trip}
  Date: ${data.startDate}
  Add-ons: ${data.addons.join(", ")}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>✓</div>
          <h2 style={styles.successTitle}>Booking Request Sent!</h2>
          <p style={styles.successSub}>
            Thank you, <strong>{form.firstName}</strong>! We've received your
            request for <strong>{form.trip}</strong>.<br />
            Our team will contact you at <strong>{form.email}</strong> within 24
            hours.
          </p>
          <div style={styles.successDivider} />
          <p
            style={{ ...styles.successSub, fontSize: "0.85rem", opacity: 0.6 }}
          >
            Reference ID: LOI-{Date.now().toString(36).toUpperCase()}
          </p>
          <button
            style={styles.backBtn}
            onClick={() => {
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
            }}
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Background elements */}
      <div style={styles.bgCircle1} />
      <div style={styles.bgCircle2} />
      <div style={styles.bgGrid} />

      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>⛰</span>
            <span style={styles.logoText}>Langtang Outdoor Initiative</span>
          </div>
          <h1 style={styles.heading}>Book Your Adventure</h1>
          <p style={styles.subheading}>
            Fill in the details below and we'll craft your perfect trek
          </p>
        </div>

        {/* Progress */}
        <div style={styles.progressWrap}>
          {[1, 2, 3].map((s) => (
            <div key={s} style={styles.progressItem}>
              <div
                style={{
                  ...styles.progressDot,
                  ...(step >= s ? styles.progressDotActive : {}),
                  ...(step === s ? styles.progressDotCurrent : {}),
                }}
              >
                {step > s ? "✓" : s}
              </div>
              <span
                style={{
                  ...styles.progressLabel,
                  ...(step >= s ? styles.progressLabelActive : {}),
                }}
              >
                {s === 1
                  ? "Personal Info"
                  : s === 2
                  ? "Trip Details"
                  : "Confirm"}
              </span>
              {s < 3 && (
                <div
                  style={{
                    ...styles.progressLine,
                    ...(step > s ? styles.progressLineActive : {}),
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div
          style={{
            ...styles.card,
            opacity: animIn ? 1 : 0,
            transform: animIn ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.2s ease",
          }}
        >
          {/* STEP 1 */}
          {step === 1 && (
            <div style={styles.stepContent}>
              <h2 style={styles.stepTitle}>Personal Information</h2>
              <p style={styles.stepDesc}>Tell us a bit about yourself</p>
              <div style={styles.row}>
                <Field label="First Name" error={errors.firstName}>
                  <input
                    style={{
                      ...styles.input,
                      ...(errors.firstName ? styles.inputError : {}),
                    }}
                    placeholder="Thupten"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                  />
                </Field>
                <Field label="Last Name" error={errors.lastName}>
                  <input
                    style={{
                      ...styles.input,
                      ...(errors.lastName ? styles.inputError : {}),
                    }}
                    placeholder="Lama"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                  />
                </Field>
              </div>
              <Field label="Email Address" error={errors.email}>
                <input
                  type="email"
                  style={{
                    ...styles.input,
                    ...(errors.email ? styles.inputError : {}),
                  }}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </Field>
              <Field label="Phone / WhatsApp" error={errors.phone}>
                <input
                  style={{
                    ...styles.input,
                    ...(errors.phone ? styles.inputError : {}),
                  }}
                  placeholder="+977 98XXXXXXXX"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </Field>
              <Field label="Country of Residence" error={errors.country}>
                <input
                  style={{
                    ...styles.input,
                    ...(errors.country ? styles.inputError : {}),
                  }}
                  placeholder="Nepal, USA, UK..."
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                />
              </Field>
              <button style={styles.nextBtn} onClick={nextStep}>
                Continue →
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div style={styles.stepContent}>
              <h2 style={styles.stepTitle}>Trip Details</h2>
              <p style={styles.stepDesc}>Choose your trek and preferences</p>

              {addons.length === 0 ? (
                <Field label="Select Trip" error={errors.trip}>
                  <div style={styles.selectWrap}>
                    <select
                      style={{
                        ...styles.select,
                        ...(errors.trip ? styles.inputError : {}),
                      }}
                      value={form.trip}
                      onChange={(e) => update("trip", e.target.value)}
                    >
                      <option value="">— Choose a trek —</option>
                      {trips.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </Field>
              ) : (
                <Field label="Selected Trip" error={errors.trip}>
                  <div
                    style={{
                      ...styles.input,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {addons.map((trip) => (
                      <span
                        key={trip}
                        style={{
                          background: "rgba(1,186,240,0.15)",
                          padding: "6px 12px",
                          borderRadius: "8px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {trip}
                      </span>
                    ))}
                  </div>
                </Field>
              )}

              <div style={styles.row}>
                <Field label="Preferred Start Date" error={errors.startDate}>
                  <input
                    type="date"
                    min={today}
                    style={{
                      ...styles.input,
                      ...(errors.startDate ? styles.inputError : {}),
                    }}
                    value={form.startDate}
                    onChange={(e) => update("startDate", e.target.value)}
                  />
                </Field>
                <Field label="Duration (days)" error={""}>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    style={styles.input}
                    placeholder="e.g. 7"
                    value={form.duration}
                    onChange={(e) => update("duration", e.target.value)}
                  />
                </Field>
              </div>

              <Field label="Group Size" error={errors.groupSize}>
                <div style={styles.chipGroup}>
                  {groupSizes.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => update("groupSize", g)}
                      style={{
                        ...styles.chip,
                        ...(form.groupSize === g ? styles.chipActive : {}),
                      }}
                    >
                      {g}
                    </button>
                  ))}
                </div>
                {errors.groupSize && (
                  <span style={styles.errMsg}>{errors.groupSize}</span>
                )}
              </Field>

              <Field
                label="Accommodation Preference"
                error={errors.accommodation}
              >
                <div style={styles.chipGroup}>
                  {accommodations.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => update("accommodation", a)}
                      style={{
                        ...styles.chip,
                        ...(form.accommodation === a ? styles.chipActive : {}),
                      }}
                    >
                      {a}
                    </button>
                  ))}
                </div>
                {errors.accommodation && (
                  <span style={styles.errMsg}>{errors.accommodation}</span>
                )}
              </Field>

              <Field label="Fitness Level" error={errors.fitnessLevel}>
                <div style={styles.chipGroup}>
                  {["Beginner", "Intermediate", "Advanced"].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => update("fitnessLevel", f)}
                      style={{
                        ...styles.chip,
                        ...(form.fitnessLevel === f ? styles.chipActive : {}),
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                {errors.fitnessLevel && (
                  <span style={styles.errMsg}>{errors.fitnessLevel}</span>
                )}
              </Field>

              <div style={styles.btnRow}>
                <button style={styles.backBtn} onClick={prevStep}>
                  ← Back
                </button>
                <button style={styles.nextBtn} onClick={nextStep}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div style={styles.stepContent}>
              <h2 style={styles.stepTitle}>Review & Confirm</h2>
              <p style={styles.stepDesc}>Double-check your booking details</p>

              <div style={styles.summaryCard}>
                <SummarySection title="Personal">
                  <SummaryRow
                    label="Name"
                    value={`${form.firstName} ${form.lastName}`}
                  />
                  <SummaryRow label="Email" value={form.email} />
                  <SummaryRow label="Phone" value={form.phone} />
                  <SummaryRow label="Country" value={form.country} />
                </SummarySection>
                <div style={styles.summaryDivider} />
                <SummarySection title="Trip">
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
                  <SummaryRow label="Fitness Level" value={form.fitnessLevel} />
                </SummarySection>
              </div>

              <Field label="Special Requests / Notes" error={""}>
                <textarea
                  style={{ ...styles.input, ...styles.textarea }}
                  placeholder="Dietary needs, medical conditions, special requests..."
                  value={form.specialRequests}
                  onChange={(e) => update("specialRequests", e.target.value)}
                />
              </Field>

              <label style={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={form.agreeTerms}
                  onChange={(e) => update("agreeTerms", e.target.checked)}
                  style={styles.checkbox}
                />
                <span>
                  I agree to the{" "}
                  <a href="#" style={styles.link}>
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" style={styles.link}>
                    Privacy Policy
                  </a>
                </span>
              </label>
              {errors.agreeTerms && (
                <span style={styles.errMsg}>{errors.agreeTerms}</span>
              )}

              <div style={styles.btnRow}>
                <button style={styles.backBtn} onClick={prevStep}>
                  ← Back
                </button>
                <button style={styles.submitBtn} onClick={handleSubmit}>
                  Confirm Booking ✓
                </button>
              </div>
            </div>
          )}
        </div>

        <p style={styles.footer}>
          🔒 Your data is safe with us · We respond within 24 hours
        </p>
      </div>
    </div>
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
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      {children}
      {error && <span style={styles.errMsg}>{error}</span>}
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
    <div style={styles.summarySection}>
      <span style={styles.summaryTitle}>{title}</span>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.summaryRow}>
      <span style={styles.summaryLabel}>{label}</span>
      <span style={styles.summaryValue}>{value || "—"}</span>
    </div>
  );
}

const PRIMARY = "#01baf0";
const PRIMARY_DARK = "#0195c5";
const PRIMARY_GLOW = "rgba(1,186,240,0.18)";
const DARK_BG = "#060d14";
const CARD_BG = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.09)";
const TEXT = "#e8f4fb";
const MUTED = "rgba(232,244,251,0.5)";

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: DARK_BG,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: "'Lato', 'Helvetica Neue', sans-serif",
    color: TEXT,
    padding: "40px 16px 80px",
    position: "relative",
    overflow: "hidden",
  },
  bgCircle1: {
    position: "fixed",
    top: "-180px",
    right: "-180px",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(1,186,240,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  bgCircle2: {
    position: "fixed",
    bottom: "-200px",
    left: "-150px",
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(1,186,240,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  bgGrid: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(1,186,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(1,186,240,0.04) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none",
  },
  wrapper: {
    width: "100%",
    maxWidth: "620px",
    position: "relative",
    zIndex: 1,
  },
  header: { textAlign: "center", marginBottom: "36px" },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  logoIcon: { fontSize: "1.8rem" },
  logoText: {
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: PRIMARY,
    opacity: 0.9,
  },
  heading: {
    fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
    fontWeight: 800,
    margin: "0 0 10px",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
  },
  subheading: { color: MUTED, fontSize: "1rem", margin: 0 },

  progressWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "32px",
    gap: 0,
  },
  progressItem: { display: "flex", alignItems: "center", gap: "8px" },
  progressDot: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    border: `1.5px solid ${BORDER}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
    fontWeight: 700,
    color: MUTED,
    transition: "all 0.3s",
  },
  progressDotActive: {
    background: PRIMARY_GLOW,
    border: `1.5px solid ${PRIMARY}`,
    color: PRIMARY,
  },
  progressDotCurrent: {
    background: PRIMARY,
    color: "#fff",
    boxShadow: `0 0 16px ${PRIMARY_GLOW}`,
  },
  progressLabel: {
    fontSize: "0.75rem",
    color: MUTED,
    transition: "color 0.3s",
    whiteSpace: "nowrap" as const,
  },
  progressLabelActive: { color: PRIMARY },
  progressLine: {
    width: "40px",
    height: "1.5px",
    background: BORDER,
    margin: "0 6px",
    transition: "background 0.3s",
  },
  progressLineActive: { background: PRIMARY },

  card: {
    background: CARD_BG,
    border: `1px solid ${BORDER}`,
    borderRadius: "20px",
    backdropFilter: "blur(20px)",
    padding: "clamp(24px, 5vw, 44px)",
  },
  stepContent: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  stepTitle: {
    fontSize: "1.4rem",
    fontWeight: 700,
    margin: 0,
    letterSpacing: "-0.01em",
  },
  stepDesc: { color: MUTED, fontSize: "0.9rem", marginTop: "-12px" },

  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" },
  field: { display: "flex", flexDirection: "column" as const, gap: "6px" },
  label: {
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    color: MUTED,
  },
  input: {
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${BORDER}`,
    borderRadius: "10px",
    padding: "12px 16px",
    color: TEXT,
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  inputError: { borderColor: "#f06060" },
  selectWrap: { position: "relative" as const },
  select: {
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${BORDER}`,
    borderRadius: "10px",
    padding: "12px 16px",
    color: TEXT,
    fontSize: "0.95rem",
    outline: "none",
    width: "100%",
    appearance: "none" as const,
    cursor: "pointer",
  },
  textarea: { minHeight: "90px", resize: "vertical" as const },
  errMsg: { fontSize: "0.75rem", color: "#f08080" },

  chipGroup: { display: "flex", flexWrap: "wrap" as const, gap: "8px" },
  chip: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: `1px solid ${BORDER}`,
    background: "rgba(255,255,255,0.04)",
    color: MUTED,
    fontSize: "0.85rem",
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "inherit",
  },
  chipActive: {
    background: PRIMARY_GLOW,
    border: `1px solid ${PRIMARY}`,
    color: PRIMARY,
    fontWeight: 600,
  },

  summaryCard: {
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${BORDER}`,
    borderRadius: "12px",
    padding: "20px 24px",
  },
  summarySection: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  summaryTitle: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: PRIMARY,
    marginBottom: "4px",
  },
  summaryDivider: { height: "1px", background: BORDER, margin: "12px 0" },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    fontSize: "0.9rem",
  },
  summaryLabel: { color: MUTED },
  summaryValue: { fontWeight: 600, textAlign: "right" as const },

  checkLabel: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "0.88rem",
    color: MUTED,
    cursor: "pointer",
  },
  checkbox: { marginTop: "2px", accentColor: PRIMARY },
  link: { color: PRIMARY, textDecoration: "none" },

  btnRow: {
    display: "flex",
    gap: "12px",
    justifyContent: "space-between",
    marginTop: "4px",
  },
  nextBtn: {
    marginTop: "4px",
    alignSelf: "flex-end" as const,
    background: PRIMARY,
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "13px 28px",
    fontSize: "0.95rem",
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.02em",
    boxShadow: `0 4px 20px ${PRIMARY_GLOW}`,
    transition: "opacity 0.2s, transform 0.1s",
    fontFamily: "inherit",
  },
  backBtn: {
    background: "transparent",
    color: MUTED,
    border: `1px solid ${BORDER}`,
    borderRadius: "10px",
    padding: "13px 22px",
    fontSize: "0.9rem",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "color 0.2s",
  },
  submitBtn: {
    background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "13px 28px",
    fontSize: "0.95rem",
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.02em",
    boxShadow: `0 4px 24px rgba(1,186,240,0.35)`,
    fontFamily: "inherit",
  },

  footer: {
    textAlign: "center" as const,
    color: MUTED,
    fontSize: "0.78rem",
    marginTop: "24px",
  },

  // Success
  successCard: {
    background: CARD_BG,
    border: `1px solid ${BORDER}`,
    borderRadius: "20px",
    backdropFilter: "blur(20px)",
    padding: "56px 40px",
    textAlign: "center" as const,
    maxWidth: "480px",
    width: "100%",
    position: "relative" as const,
    zIndex: 1,
  },
  successIcon: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: PRIMARY,
    color: "#fff",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    boxShadow: `0 0 32px ${PRIMARY_GLOW}`,
  },
  successTitle: { fontSize: "1.8rem", fontWeight: 800, marginBottom: "16px" },
  successSub: { color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" },
  successDivider: { height: "1px", background: BORDER, margin: "20px 0" },
};
