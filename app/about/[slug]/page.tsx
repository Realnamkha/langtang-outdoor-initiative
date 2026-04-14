import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { TEAM } from "@/lib/team";

const BRAND = "linear-gradient(90deg, #01baf0, #0191c8)";

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = TEAM.find((t) => t.slug === slug);

  if (!member) {
    return (
      <div className="p-10 text-center text-gray-500">
        Member not found
        <div className="mt-4">
          <Link href="/about" className="text-[#01baf0]">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar transparent={false} />

      <section className="flex-1 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back */}
          <Link
            href="/about"
            className="text-xs text-gray-400 hover:text-[#01baf0] uppercase tracking-widest"
          >
            ← Back to Team
          </Link>

          {/* Hero */}
          <div className="flex flex-col sm:flex-row gap-6 mt-10 border-b pb-10">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden ring-2 ring-[#01baf0]/20">
              <Image
                src={member.img}
                alt={member.name}
                width={160}
                height={160}
                className="w-40 h-40 object-cover rounded-2xl"
                priority
              />
            </div>

            <div>
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ background: BRAND }}
              >
                {member.role}
              </span>

              <h1 className="text-4xl font-black mt-3">{member.name}</h1>

              <p className="text-gray-400 text-sm mt-2">{member.title}</p>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              {member.bio?.map((b, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {b}
                </p>
              ))}

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                  Specialties
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.specialties?.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-[#f0fbff] text-[#0191c8]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <div className="bg-[#f8f7f4] p-5 rounded-2xl">
                <p className="text-xs uppercase text-gray-400 mb-3">
                  Languages
                </p>

                {member.languages?.map((l) => (
                  <div key={l.lang} className="flex justify-between">
                    <span className="text-sm">{l.lang}</span>
                    <span className="text-gray-400 text-xs">{l.level}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#f8f7f4] p-5 rounded-2xl">
                <p className="text-xs uppercase text-gray-400 mb-3">
                  Certifications
                </p>

                {member.certifications?.map((c) => (
                  <div key={c} className="text-sm flex gap-2">
                    <span className="text-[#01baf0]">•</span>
                    {c}
                  </div>
                ))}
              </div>

              <div className="bg-[#f8f7f4] p-5 rounded-2xl">
                <p className="text-xs uppercase text-gray-400 mb-1">Based In</p>
                <p className="text-sm">{member.location}</p>
                <p className="text-xs text-gray-400">
                  Originally from {member.origin}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
