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
    { label: "Gosaikunda Lake Trek", path: "/expeditions/gosaikunda" },
    { label: "Helambu Circuit", path: "/expeditions/helambu" },
    { label: "Tamang Heritage Trail", path: "/expeditions/tamang" },
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
    { Icon: Instagram, path: "https://instagram.com", label: "Instagram" },
    { Icon: Youtube, path: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo.jpg"
                alt="Langtang Outdoor Initiative"
                width={52}
                height={52}
                className="rounded-lg"
              />
              <span className="font-bold text-base leading-tight">
                Langtang <br />
                <span className="text-[#01baf0]">Outdoor Initiative</span>
              </span>
            </Link>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, path, label }) => (
                <a
                  key={label}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#01baf0] hover:text-[#01baf0] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#01baf0] font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all duration-200 text-[#01baf0]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#01baf0] font-semibold mb-5">
              Popular Treks
            </h4>
            <ul className="space-y-3">
              {expeditions.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 text-[#01baf0]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#01baf0] font-semibold mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#01baf0] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Langtang Village, Rasuwa District, Bagmati Province, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#01baf0] shrink-0" />
                <a
                  href="tel:+977XXXXXXXXX"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +977 XX-XXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#01baf0] shrink-0" />
                <a
                  href="mailto:info@langtangoutdoor.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@langtangoutdoor.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Langtang Outdoor Initiative. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
