import { expeditions, getExpeditionBySlug } from "@/lib/expedition";
import Hero from "./components/Hero";
import TripOverview from "./components/TripOverview";
import Itinerary from "@/components/ui/Itinerary";
import CtaBlock from "./components/CtaBlock";
import { ExpeditionStatsBar } from "./components/ExpeditionStatsBar";
import GearPage from "./components/Gear";
import InclusionsExclusions from "@/components/ui/InclusionExclusion";
import {
  expeditionExcludes,
  expeditionIncludes,
} from "@/lib/expedition_include_exclude";

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

  return (
    <main className="min-h-screen bg-[#f8f7f4] text-black">
      <Hero expedition={expedition} />
      <ExpeditionStatsBar expedition={expedition} />
      <TripOverview expedition={expedition} />
      <section className="bg-gray-50">
        <InclusionsExclusions
          includes={expeditionIncludes}
          excludes={expeditionExcludes}
        />
      </section>
      <Itinerary itinerary={expedition.itinerary} />
      <GearPage />
      <CtaBlock expedition={expedition} />
    </main>
  );
}
