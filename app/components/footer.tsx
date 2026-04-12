"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  const expeditions = [
    { label: "Langtang Valley Trek", path: "/expeditions/langtang-valley" },
    { label: "Yala Peak Expedition", path: "/expeditions/gosaikunda" },
    { label: "Langtang Bouldering", path: "/expeditions/helambu" },
    { label: "Festive Pack", path: "/expeditions/tamang" },
  ];

  const quickLinks = [
    { label: "Expeditions", path: "/expeditions" },
    { label: "Adventures", path: "/adventures" },
    { label: "Cultural Tours", path: "/culturaltours" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const socials = [
    { Icon: Facebook, path: "https://facebook.com", label: "Facebook" },
    {
      Icon: Instagram,
      path: "https://www.instagram.com/langtang_outdoor_initiative/",
      label: "Instagram",
    },
    { Icon: Youtube, path: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-black text-white">
      <Image
        src="/pic4.JPG"
        alt="Langtang"
        fill
        className="object-cover object-[60%_70%]"
      />
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── MOBILE LAYOUT ── */}
        <div className="block lg:hidden py-8 space-y-6">
          {/* Brand row */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo_final.jpg"
                alt="logo"
                width={34}
                height={34}
                className="rounded-md"
              />
              <span className="text-sm text-primary font-semibold leading-tight">
                Langtang <span className="text-white">Outdoor Initiative</span>
              </span>
            </Link>

            {/* Socials */}
            <div className="flex gap-1.5">
              {socials.map(({ Icon, path, label }) => (
                <a
                  key={label}
                  href={path}
                  target="_blank"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-[#01baf0] hover:border-[#01baf0] transition"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            {/* Phone */}
            <div className="flex items-start gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-white/80">
              <Phone className="w-3.5 h-3.5 text-[#01baf0] mt-0.5 shrink-0" />
              <div className="flex flex-col gap-0.5 leading-tight">
                <span>+977 9843023847</span>
                <span>+977 9761662049</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium">
              <Mail className="w-3.5 h-3.5 text-[#01baf0] shrink-0" />
              <span className="truncate">langtang.outdoor7227@gmail.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#01baf0] shrink-0" />
              Langtang, Nepal
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/35">
            <p>© {new Date().getFullYear()} LangtangOutdoorInitiative</p>
            <div className="flex gap-3">
              <Link href="/privacy" className="hover:text-white/60 transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white/60 transition">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT (unchanged feel, just hidden on mobile) ── */}
        <div className="hidden lg:block pt-16 pb-8">
          <div className="grid grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo_final.jpg"
                  alt="logo"
                  width={42}
                  height={42}
                  className="rounded-md"
                />
                <span className="text-sm text-primary font-semibold leading-tight">
                  Langtang <br />
                  <span className="text-white">Outdoor Initiative</span>
                </span>
              </Link>
              <div className="flex gap-2 mt-3">
                {socials.map(({ Icon, path, label }) => (
                  <a
                    key={label}
                    href={path}
                    target="_blank"
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-[#01baf0] hover:border-[#01baf0] transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] tracking-widest text-[#01baf0] mb-3 uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-sm text-white/70 hover:text-white flex items-center gap-1 group transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#01baf0]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treks */}
            <div>
              <h4 className="text-[11px] tracking-widest text-[#01baf0] mb-3 uppercase">
                Popular Treks
              </h4>
              <ul className="space-y-2">
                {expeditions.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-sm text-white/70 hover:text-white flex items-center gap-1 group transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#01baf0]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[11px] tracking-widest text-[#01baf0] mb-3 uppercase">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 text-[#01baf0] shrink-0 mt-0.5" />
                  <span>Langtang, Nepal</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Phone className="w-4 h-4 text-[#01baf0] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <a
                      href="tel:+9779843023847"
                      className="hover:text-white transition-colors"
                    >
                      +977 9843023847
                    </a>
                    <a
                      href="tel:+9779761662049"
                      className="hover:text-white transition-colors"
                    >
                      +977 9761662049
                    </a>
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <Mail className="w-4 h-4 text-[#01baf0] shrink-0" />
                  langtang.outdoor7227@gmail.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
            <p>© {new Date().getFullYear()} Langtang Outdoor Initiative</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white/60 transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white/60 transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
