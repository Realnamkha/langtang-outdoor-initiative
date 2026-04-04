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
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01baf0]">
            About the Valley
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] leading-tight tracking-tight">
            A Sacred Land with Deep Roots
          </h2>
          {/* Sticky label column */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-4">
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
              Langtang Valley, in Nepal’s northern Himalayas, is home to the
              indigenous Langtangpa community of Tibetan origin, followers of
              Tibetan Buddhism, and speakers of a language close to southern
              Tibet. Their traditional agro-pastoral and seasonal herding
              lifestyle is one of the most sustainable ways of mountain living,
              though modern tourism now threatens these ancestral practices.
            </p>
            <p>
              Rich in myths and spiritual significance, the valley is said to
              have been discovered following a runaway ox “Lang” in Tibetan, and
              is considered a hidden beyul blessed by Guru Padmasambhava.
              Largely isolated until British explorer Bill Tilman’s visit in
              1949, Langtang is now famed for its glaciers, Himalayan
              landscapes, and biodiversity. Today, it stands at a crossroads,
              where ancient traditions, myth, and tourism intersect, offering
              both cultural depth and breathtaking adventure
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
