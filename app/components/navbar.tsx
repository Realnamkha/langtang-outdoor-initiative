"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Navbar = ({ transparent = true }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/events", label: "Events" },
    { href: "/expeditions", label: "Expeditions" },
    { href: "/adventures", label: "Adventures" },
    { href: "/cultural-tours", label: "Cultural Tours" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isLight = scrolled || !transparent;

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLight ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo_final.jpg"
              alt="Langtang Outdoor Initiative"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span
              className={`font-display text-[15px] font-bold tracking-tight leading-tight hidden sm:block ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              <span className="text-primary">Langtang </span>Outdoor Initiative
            </span>
          </Link>

          {/* Desktop links */}
          <div
            className={`hidden md:flex items-center gap-6 font-medium text-sm ${
              isLight ? "text-gray-700" : "text-white/80"
            }`}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-primary relative ${
                    active ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* WhatsApp CTA — desktop */}
            <a
              href="https://wa.me/+9779761662049"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#25d366] bg-[#25d366]/10 border border-[#25d366]/25 hover:bg-[#25d366]/18 transition-all duration-150"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>

            {/* WhatsApp icon only — mobile */}
            <a
              href="https://wa.me/+9779761662049"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#25d366] bg-[#25d366]/10 border border-[#25d366]/20"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                isLight
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-3 mb-3 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
            {/* Nav links */}
            <div className="px-2 py-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all group ${
                      active
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                    <span
                      className={`text-base leading-none transition-colors ${
                        active
                          ? "text-primary"
                          : "text-gray-300 group-hover:text-primary"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
