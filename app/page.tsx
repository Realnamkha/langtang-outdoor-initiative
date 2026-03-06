import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero_first";
import Hero_Second from "./components/hero_third";
import Hero_Third from "./components/hero_second";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Hero_Third />
      <Hero_Second />
    </div>
  );
}
