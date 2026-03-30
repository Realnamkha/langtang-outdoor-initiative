"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

  return (
    <div>
      {open && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm z-40 md:hidden"
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
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu — no z needed, it's inside the nav which is already z-50 */}
        {open && (
          <div className="md:hidden px-6 py-4 flex flex-col bg-white text-black border-t border-gray-100 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between py-3.5 border-b border-gray-100 last:border-none text-sm font-medium text-gray-700 hover:text-primary transition-colors group"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <span className="text-gray-300 group-hover:text-primary transition-colors text-lg leading-none">
                  →
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
