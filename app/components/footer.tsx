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
      {/* Background */}
      <Image
        src="/pic4.JPG"
        alt="Langtang"
        fill
        className="object-cover object-[60%_70%]"
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo_final.jpg"
                alt="logo"
                width={42}
                height={42}
                className="rounded-md"
              />
              <span className="text-sm font-semibold leading-tight">
                Langtang <br />
                <span className="text-[#01baf0]">Outdoor Initiative</span>
              </span>
            </Link>

            {/* SOCIALS */}
            <div className="flex gap-2 mt-2">
              {socials.map(({ Icon, path, label }) => (
                <a
                  key={label}
                  href={path}
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-[#01baf0] hover:border-[#01baf0] transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[11px] tracking-widest text-[#01baf0] mb-3">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-white/70 hover:text-white flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#01baf0]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TREKS */}
          <div>
            <h4 className="text-[11px] tracking-widest text-[#01baf0] mb-3">
              POPULAR TREKS
            </h4>
            <ul className="space-y-2">
              {expeditions.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-white/70 hover:text-white flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#01baf0]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[11px] tracking-widest text-[#01baf0] mb-3">
              CONTACT
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-[#01baf0]" />
                <span>Langtang, Nepal</span>
              </li>

              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-[#01baf0]" />
                <div className="flex flex-col">
                  <a href="tel:+9779843023847">+977 9843023847</a>
                  <a href="tel:+9779761662049">+977 9761662049</a>
                </div>
              </li>

              <li className="flex gap-2">
                <Mail className="w-4 h-4 text-[#01baf0]" />
                <a href="mailto:langtang.outdoor7227@gmail.com">Email us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Langtang Outdoor Initiative</p>

          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
