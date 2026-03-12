import { expeditions, getExpeditionBySlug } from "@/lib/expedition";
import Hero from "./components/Hero";
import TripOverview from "./components/TripOverview";
import Itinerary from "@/components/ui/Itinerary";
import CtaBlock from "./components/CtaBlock";
import { ExpeditionStatsBar } from "./components/ExpeditionStatsBar";

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
      <Itinerary itinerary={expedition.itinerary} />
      <CtaBlock expedition={expedition} />
    </main>
  );
}
