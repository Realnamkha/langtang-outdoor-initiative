"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ transparent = true }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 p-2 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md text-black"
            : transparent
            ? "bg-transparent text-white"
            : "bg-white shadow-md text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo_final.jpg"
              alt="Mountain"
              width={72}
              height={72}
              className="rounded-lg"
            />
            <span className="font-display text-lg font-bold tracking-tight">
              <span className="text-primary">Langtang </span>Outdoor Initiative
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger — slightly larger tap target */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-black/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mx-3 mb-3 rounded-2xl bg-white text-black shadow-xl border border-gray-100 overflow-hidden">
            {/* Menu header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-gray-400">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Links */}
            <div className="px-2 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all group"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span className="text-gray-300 group-hover:text-primary transition-colors text-base leading-none">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
