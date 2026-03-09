"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const navLinks = [
    { href: "expeditions", label: "Expeditions" },
    { href: "adventures", label: "Adventures" },
    { href: "culturaltours", label: "Cultural-Tours" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 p-2 transition-all duration-300 backdrop-blur-lg ${
        scrolled
          ? "bg-gray-100 text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpg"
            alt="Mountain"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <span className="font-display text-lg font-bold tracking-tight">
            Langtang <span className="text-primary">Outdoor Initiative</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-primary ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden border-b px-6 pb-4 flex flex-col gap-3 font-medium transition-colors duration-300 ${
            scrolled
              ? "bg-white border-black-200 text-black"
              : "bg-black bg-opacity-80 text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-600 transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* ── Progress bar — flush at bottom of navbar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full transition-none"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, #01baf0, #0191c8)",
            boxShadow:
              "0 0 8px rgba(1,186,240,0.6), 0 0 2px rgba(1,186,240,0.4)",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
