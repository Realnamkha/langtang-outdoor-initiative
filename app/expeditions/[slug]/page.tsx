import { expeditions, getExpeditionBySlug } from "@/lib/expedition";
import Hero from "./components/Hero";
import StatsBar from "./components/Statsbar";
import TripOverview from "./components/TripOverview";
import Itinerary from "./components/Itinerary";
import Gallery from "./components/Gallery";
import CtaBlock from "./components/CtaBlock";
import ScrollProgress from "./components/ScrollProgress";

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
      <StatsBar expedition={expedition} />
      <TripOverview expedition={expedition} />
      <Itinerary expedition={expedition} />
      <CtaBlock expedition={expedition} />
      <Gallery expedition={expedition} />
    </main>
  );
}
