import { expeditions, getExpeditionBySlug } from "@/lib/type";
import { notFound } from "next/navigation";
import Image from "next/image";

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
  if (!expedition) {
    console.log("expdetion not found");
    return;
  }

  return (
    <main className="bg-black min-h-screen px-6 py-20">
      {/* Hero */}
      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10">
        Hello
      </div>
    </main>
  );
}
