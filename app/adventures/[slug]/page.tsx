import Navbar from "@/app/components/navbar";
import { getAdventureBySlug } from "@/lib/adventure";
import Intro from "./component/Intro";
import Adventures from "../components/Adventure";

export default async function AdventurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  const adventure = getAdventureBySlug(slug);
  if (!adventure) return;
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-black">
      <Navbar transparent={false} />
      <Intro
        title={adventure.title}
        desc={adventure.description}
        img={adventure.imageSrc}
      />
    </main>
  );
}
