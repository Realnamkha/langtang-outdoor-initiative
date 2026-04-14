import { adventures, getAdventureBySlug } from "@/lib/adventure";
import { AdventureStatsBar } from "./component/AdventureStatsbar";
import Itinerary from "@/components/ui/Itinerary";
import InclusionsExclusions from "@/components/ui/InclusionExclusion";
import { notFound } from "next/navigation";
import Hero from "./component/Intro";
import TripOverview from "./component/TripOverview";
import EventCardImage from "./component/Glass_Card";
import BoulderAddOns from "./component/Boulderadd";
import {
  viaferrataExcludes,
  viaferrataIncludes,
} from "@/lib/via_include_exclude";
import {
  highlineExcludes,
  highlineIncludes,
} from "@/lib/highline_include_exclude";
import {
  includes as defaultIncludes,
  excludes as defaultExcludes,
} from "@/lib/include_exclude";
import Link from "next/link";

export function generateStaticParams() {
  return adventures.map((a) => ({ slug: a.slug }));
}

export default async function AdventurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const adventure = getAdventureBySlug(slug);
  if (!adventure) notFound();
  const Via = adventure.title === "Via Ferrata";
  const high = adventure.title === "HighLine-SlackLine";

  return (
    <main className="bg-[#f8f7f4] text-gray-900 overflow-x-hidden">
      <div>
        <Hero adventure={adventure} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AdventureStatsBar adventure={adventure} />
        </div>
        <TripOverview adventure={adventure} />
      </div>
      {/* ── Inclusions / Exclusions ──────────────────────────────────────── */}
      <section className="bg-gray-50">
        <InclusionsExclusions
          includes={
            Via ? viaferrataIncludes : high ? highlineIncludes : defaultIncludes
          }
          excludes={
            Via ? viaferrataExcludes : high ? highlineExcludes : defaultExcludes
          }
        />
      </section>
      {/* ── Itinerary ────────────────────────────────────────────────────── */}
      {adventure.itinerary && adventure.itinerary.length > 0 && (
        <section className="bg-white">
          <Itinerary itinerary={adventure.itinerary} />
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      {Via && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <EventCardImage
              title="The 6-Hour Summit"
              subHeadline="Short on time? Touch the base of Langtang Lirung and be back for lunch."
              hook="A 1.9km iron path engineered for safety and thrill. No climbing experience required."
              imageSrc="/via_01.jpg"
              duration="6 Hours"
              activity="The Day Adventure"
              region="Langtang, Nepal"
              link="/book-day-adventure"
            />

            {/* Card 2 */}
            <EventCardImage
              title="Via Ferrate Over Langtang"
              subHeadline="Elevate your Langtang Valley trek with an exciting Via Ferrata, clip in, climb higher, and experience the Himalayas from a whole new perspective."
              imageSrc="/via_02.jpg"
              duration="6 Hours"
              activity="The Trek Upgrade"
              region="Langtang, Nepal"
              link="/book-sunrise-trek"
            />
          </div>
        </div>
      )}
      {high && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <EventCardImage
              title="The Alpine Flow"
              subHeadline="Step onto the line and feel the pure alpine flow of highlining and slacklining, surrounded by towering 6,000m–7,000m Himalayan peaks."
              hook="Suspended above the valley, it’s a perfect blend of balance, thrill, and connection with nature."
              imageSrc="/high_07.JPG"
              duration="6 Hours"
              activity="The Day Adventure"
              region="Langtang, Nepal"
              link="/book-day-adventure"
            />

            {/* Card 2 */}
            <EventCardImage
              title="Elevate The Experience"
              subHeadline="Upgrade your Langtang Valley trek with highlining and slack-lining, experience thrilling alpine flow, breathtaking Himalayan views, and a unique adventure that elevates your journey beyond the ordinary."
              imageSrc="/high_06.jpg"
              duration="6 Hours"
              activity="The Trek Upgrade"
              region="Langtang, Nepal"
              link="/book-sunrise-trek"
            />
          </div>
        </div>
      )}
      <div>
        <BoulderAddOns activityId={adventure.title} />
      </div>
      <section className="bg-gray-50 py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 px-8 py-16 md:px-16">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Brand accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#01baf0]" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              {/* Left */}
              <div className="flex flex-col gap-4 max-w-lg">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                  Reserve Your Spot
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                  Ready for {adventure.title}?
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Small groups, experienced local guides, and authentic
                  Himalayan experiences. Every detail handled — all you have to
                  do is show up.
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col items-start md:items-end gap-5 shrink-0">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Link
                    href="/booking"
                    className="px-7 py-3.5 rounded-xl bg-[#01baf0] text-white text-sm font-semibold hover:bg-[#0191c8] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-[#01baf0]/20 text-center"
                  >
                    Book This Adventure
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want to include sub-headline & hook inside the card, modify EventCardImage component slightly: */}

        {/* Inside EventCardImage, under the title: */}
      </section>
    </main>
  );
}
