import { expeditions, getExpeditionBySlug } from "@/lib/expedition";
import Image from "next/image";

import { Clock, Mountain, MapPin, DollarSign, Users } from "lucide-react";

export function generateStaticParams() {
  return expeditions.map((e) => ({ slug: e.slug }));
}

export default async function ExpeditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const expedition = getExpeditionBySlug(slug);
  if (!expedition) return;

  const sentences = expedition.description.split(". ");
  const preview = sentences.slice(0, 8).join(". ") + ".";
  const rest = sentences.slice(8).join(". ");

  return (
    <main
      className="min-h-screen"
      style={{ background: "#080c12", color: "#e8e4dc" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-mono-dm { font-family: 'DM Mono', monospace; }

        /* remove default browser triangle */
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }

        /* rotate arrow when open */
        details[open] .details-arrow { transform: rotate(180deg); }
        .details-arrow { display: inline-block; transition: transform 0.25s ease; }

        .itin-summary:hover span { color: #01baf0; }
        .read-label::after             { content: "Read More"; }
        details[open] .read-label::after { content: "Read Less"; }
      `}</style>

      {/* ── HERO ──────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "50vh", minHeight: 560 }}
      >
        <Image
          src={expedition.imageSrc}
          alt={expedition.title}
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 40%, #080c12 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.45), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 flex flex-col justify-end"
          style={{ padding: "0 4rem 5rem" }}
        >
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 0.92,
            }}
          >
            {expedition.title}
          </h1>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem" }}>
        <div
          style={{
            maxWidth: "62rem",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "linear-gradient(135deg,#0d1420,#111827)",
            border: "1px solid rgba(1,186,240,0.15)",
            borderRadius: "1rem",
            marginTop: "-1px",
          }}
        >
          {[
            {
              icon: <Clock size={18} strokeWidth={1.5} />,
              label: "Duration",
              val: expedition.duration,
            },
            {
              icon: <Mountain size={18} strokeWidth={1.5} />,
              label: "Max Altitude",
              val: expedition.altitude,
            },
            {
              icon: <MapPin size={18} strokeWidth={1.5} />,
              label: "Region",
              val: expedition.region ?? "Nepal",
            },
            ...(expedition.price
              ? [
                  {
                    icon: <DollarSign size={18} strokeWidth={1.5} />,
                    label: "Price From",
                    val: expedition.price,
                  },
                ]
              : [
                  {
                    icon: <Users size={18} strokeWidth={1.5} />,
                    label: "Style",
                    val: "Small Group",
                  },
                ]),
          ].map(({ icon, label, val }, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1"
              style={{
                padding: "1.2rem 1rem",
                borderLeft: i > 0 ? "1px solid rgba(1,186,240,0.1)" : "none",
              }}
            >
              <span style={{ color: "#01baf0" }}>{icon}</span>
              <span
                className="font-mono-dm uppercase"
                style={{
                  color: "#01baf0",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  textAlign: "center",
                }}
              >
                {val}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRIP OVERVIEW ─────────────────────────────── */}
      <section
        style={{
          maxWidth: "62rem",
          margin: "0 auto",
          padding: "5rem 1.5rem 2rem",
        }}
      >
        <SectionHeading>
          Trip <em style={{ color: "#01baf0" }}>Overview</em>
        </SectionHeading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1px 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* left — description */}
          <div>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 15,
                lineHeight: 1.85,
                marginBottom: "0.75rem",
              }}
            >
              {preview}
            </p>

            {rest && (
              <details style={{ display: "flex", flexDirection: "column" }}>
                {/* expanded text — order 1, appears above the button */}
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: 15,
                    lineHeight: 1.85,
                    marginBottom: "0.75rem",
                    order: 1,
                  }}
                >
                  {rest}
                </p>

                <summary
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    order: 2,
                  }}
                >
                  <span
                    className="font-mono-dm read-label"
                    style={{
                      color: "#01baf0",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  />
                  <span
                    className="details-arrow"
                    style={{ color: "#01baf0", fontSize: 11 }}
                  >
                    ↓
                  </span>
                </summary>
              </details>
            )}
          </div>
          <div
            style={{
              alignSelf: "stretch",
              background:
                "linear-gradient(to bottom, transparent, rgba(1,186,240,0.2) 20%, rgba(1,186,240,0.2) 80%, transparent)",
            }}
          />
          {/* right — quick facts */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {[
              { label: "Starting Point", val: "Kathmandu, Nepal" },
              { label: "Trek Style", val: "Teahouse + Base Camp" },
              { label: "Best Season", val: "Mar – May · Sep – Nov" },
              { label: "Permits", val: "TIMS + Langtang NP" },
              { label: "Physical Level", val: "Moderate – Strenuous" },
            ].map(({ label, val }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  gap: "1rem",
                }}
              >
                <span
                  className="font-mono-dm uppercase"
                  style={{
                    color: "rgba(1,186,240,0.55)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    color: "#e8e4dc",
                    fontSize: 13,
                    fontWeight: 500,
                    textAlign: "right",
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ITINERARY ─────────────────────────────────── */}
      <section
        style={{
          maxWidth: "62rem",
          margin: "0 auto",
          padding: "6rem 1.5rem 4rem",
        }}
      >
        <SectionHeading>
          Day-by-Day <em style={{ color: "#01baf0" }}>Itinerary</em>
        </SectionHeading>
        <p
          className="font-mono-dm"
          style={{
            color: "rgba(1,186,240,0.45)",
            fontSize: 10,
            textAlign: "center",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
          }}
        >
          {expedition.itinerary.length} days · click each day to expand
        </p>

        <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
          {expedition.itinerary.map(({ day, description }, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "4rem" }}>
              {/* vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "1.5rem",
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background:
                    i === expedition.itinerary.length - 1
                      ? "linear-gradient(to bottom, rgba(1,186,240,0.4), transparent)"
                      : "rgba(1,186,240,0.2)",
                }}
              />

              {/* day badge */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "0.9rem",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  background: "rgba(1,186,240,0.08)",
                  border: "1px solid rgba(1,186,240,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <span
                  className="font-mono-dm"
                  style={{ color: "#01baf0", fontSize: 10, fontWeight: 600 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <details style={{ paddingBottom: "1.5rem" }}>
                <summary
                  className="itin-summary"
                  style={{
                    cursor: "pointer",
                    paddingTop: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {/* day label */}
                  <span
                    className="font-mono-dm"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#01baf0",
                      flexShrink: 0,
                    }}
                  >
                    {day}
                  </span>
                  {/* truncated preview */}
                  <span
                    style={{
                      flex: 1,
                      fontSize: 13,
                      color: "#6b7280",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {description}
                  </span>
                  {/* arrow */}
                  <span
                    className="details-arrow"
                    style={{
                      color: "rgba(1,186,240,0.45)",
                      fontSize: 11,
                      flexShrink: 0,
                    }}
                  >
                    ↓
                  </span>
                </summary>

                {/* expanded */}
                <p
                  style={{
                    color: "#d1d5db",
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  {description}
                </p>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────── */}
      {expedition.gallery.length > 0 && (
        <section
          style={{
            maxWidth: "62rem",
            margin: "0 auto",
            padding: "2rem 1.5rem 4rem",
          }}
        >
          <SectionHeading>
            Photo <em style={{ color: "#01baf0" }}>Gallery</em>
          </SectionHeading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
            }}
          >
            {expedition.gallery.map((src, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  borderRadius: "0.875rem",
                  overflow: "hidden",
                  aspectRatio: i === 0 ? "4/3" : "1/1",
                  gridColumn: i === 0 ? "span 2" : "span 1",
                }}
              >
                <Image
                  src={src}
                  alt={`${expedition.title} photo ${i + 1}`}
                  fill
                  className="object-cover"
                  style={{ transition: "transform 0.5s ease" }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "62rem",
          margin: "0 auto",
          padding: "2rem 1.5rem 8rem",
        }}
      >
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            textAlign: "center",
            background: "linear-gradient(135deg,#0d1a2b,#0a1520)",
            border: "1px solid rgba(1,186,240,0.2)",
          }}
        >
          <div>
            <p
              className="font-mono-dm"
              style={{
                color: "#01baf0",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Ready to summit?
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 300,
                color: "#fff",
              }}
            >
              Join the <em style={{ color: "#01baf0" }}>{expedition.title}</em>{" "}
              Expedition
            </h2>
            {expedition.price && (
              <p
                style={{ color: "#6b7280", marginTop: "0.75rem", fontSize: 14 }}
              >
                Starting from{" "}
                <span
                  style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem" }}
                >
                  {expedition.price}
                </span>{" "}
                per person
              </p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                padding: "1rem 2.5rem",
                borderRadius: "0.75rem",
                fontFamily: "DM Mono, monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#000",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg,#01baf0,#0191c8)",
              }}
            >
              Book This Expedition →
            </button>
            <button
              style={{
                padding: "1rem 2.5rem",
                borderRadius: "0.75rem",
                fontFamily: "DM Mono, monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#01baf0",
                background: "transparent",
                border: "1px solid rgba(1,186,240,0.3)",
                cursor: "pointer",
              }}
            >
              Ask a Question
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── Helper ─────────────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4" style={{ marginBottom: "2.5rem" }}>
      <div
        style={{
          height: 1,
          flex: 1,
          background:
            "linear-gradient(to right, rgba(1,186,240,0.5), transparent)",
        }}
      />
      <h2
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
          fontWeight: 300,
          color: "#fff",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          height: 1,
          flex: 1,
          background:
            "linear-gradient(to left, rgba(1,186,240,0.5), transparent)",
        }}
      />
    </div>
  );
}
