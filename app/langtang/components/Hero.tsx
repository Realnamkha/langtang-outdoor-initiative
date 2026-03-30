import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[80vh] w-full flex items-end">
        <Image
          src="/langtang.jpg"
          alt="Langtang Mountain"
          fill
          priority
          className="object-cover object-[center_90%]"
        />

        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />
      </section>

      {/* ── About Section ── */}
      <section className="w-full bg-white px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Sticky label column */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01baf0]">
              About the Valley
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] leading-tight tracking-tight">
              A Sacred Land with Deep Roots
            </h2>
            <div className="relative w-full h-[350px] md:h-120 rounded-2xl overflow-hidden drop-shadow-xl">
              <Image
                src="/buddhist_04.jpg"
                alt="Sacred Buddhist Valley"
                priority
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Body text column */}
          <div className="flex flex-col gap-7 text-[#4a4540] text-base leading-[1.9]">
            <p>
              Langtang Valley, located in the northern Himalayas of Nepal, has
              been home for centuries to the indigenous Langtangpa
              community—people of strong Tibetan origin who follow Tibetan
              Buddhism and speak a language closely related to that of southern
              Tibet . Traditionally, their way of life has been deeply rooted in
              agro-pastoralism and transhumance migration, where families move
              seasonally with livestock in harmony with nature. This system is
              widely regarded as one of the most sustainable forms of mountain
              living, preserving both ecological balance and cultural
              continuity. However, in recent decades, Langtang has been
              gradually shifting from a subsistence-based livelihood to a
              tourism-driven economy, raising concerns about the erosion of its
              ancestral identity and traditional knowledge systems. The cultural
              landscape of Langtang is equally shaped by rich myths and oral
              histories passed down through generations. According to local
              belief, the valley was first discovered by following a runaway
              ox—“Lang” meaning ox in Tibetan—giving the valley its name and
              spiritual significance .
            </p>
            <p>
              Many places within the valley are said to have been named after
              the movements and actions of this sacred animal, and even today,
              there are sites dedicated to its memory. Beyond myth, Langtang is
              also considered a sacred hidden valley, or beyul, blessed by Guru
              Padmasambhava, adding a deep spiritual dimension to its landscape
              . These stories and beliefs continue to shape the identity and
              worldview of the local people. Langtang remained largely isolated
              from the outside world until the mid-20th century, when the
              British explorer Bill Tilman passed through the region during his
              Himalayan explorations. His journeys in 1949 helped introduce
              Langtang to the global mountaineering and trekking community, and
              he famously described it as one of the most beautiful valleys in
              the world . Since then, the valley—now part of Langtang National
              Park—has gained recognition for its dramatic himalayan landscapes,
              glaciers, and rich biodiversity, often earning the name “Valley of
              Glaciers” . Today, Langtang stands at a crossroads: a place where
              ancient traditions, myth, and modern tourism intersect, making it
              both a culturally rich homeland and an emerging global
              destination.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
