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

const Footer = () => {
  const expeditions = [
    { label: "Langtang Valley Trek", path: "/adventures/langtang-trek" },
    { label: "Yala Peak Expedition", path: "/expeditions/yala-peak-2026" },
    { label: "Langtang Bouldering", path: "/adventures/boulder-trek" },
    { label: "Festive Pack", path: "/cultural-tours/festive-pack" },
  ];

  const quickLinks = [
    { label: "Expeditions", path: "/expeditions" },
    { label: "Adventures", path: "/adventures" },
    { label: "Cultural Tours", path: "/cultural-tours" },
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
    {
      Icon: Youtube,
      path: "https://www.youtube.com/@LangtangOutdoorInitiative",
      label: "YouTube",
    },
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
