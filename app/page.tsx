import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero_first";
import Hero_Second from "./components/hero_second";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Hero_Second />
    </div>
  );
}
