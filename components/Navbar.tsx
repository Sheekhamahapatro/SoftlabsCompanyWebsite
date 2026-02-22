"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Value Proposition", href: "/value-proposition" },
  { name: "Complaint / Query", href: "/complaint-register" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeMobile]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 shadow-lg border-b border-white/20"
            : "backdrop-blur-lg bg-white/40"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo - interactive */}
          <Link
            href="/"
            className="group relative block transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Softlabs Infotech - Home"
          >
            <img
              src="/LOGO.png"
              alt="Softlabs Infotech Logo"
              className="w-[90px] h-auto transition-opacity duration-300 group-hover:opacity-90 sm:w-[100px] md:w-[110px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 relative">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const hovered = hoveredLink === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`group relative py-2 text-sm font-medium transition-all duration-300 rounded-lg px-3 -mx-3 ${
                    active
                      ? "text-violet-600"
                      : "text-gray-700 hover:text-violet-600 hover:bg-violet-50/80"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2`}
                >
                  {link.name}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 origin-left ${
                      hovered || active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-50"
                    }`}
                  />
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - more interactive */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:scale-105 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>

          {/* Mobile Menu Button - animated */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-violet-50 hover:text-violet-600 active:bg-violet-100 transition-colors duration-200"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative w-6 h-6">
              <Menu
                size={26}
                className={`absolute inset-0 transition-all duration-300 ${
                  mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                size={26}
                className={`absolute inset-0 transition-all duration-300 ${
                  mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out sm:w-72 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="font-bold text-lg text-gray-900">Menu</span>
          <button
            onClick={closeMobile}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobile}
                className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-gray-700 transition-all duration-200 hover:bg-violet-50 hover:text-violet-600 active:bg-violet-100 ${
                  active ? "bg-violet-50 text-violet-600 font-semibold" : "font-medium"
                }`}
              >
                {link.name}
                <ChevronRight
                  size={18}
                  className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={closeMobile}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Us
            <ChevronRight size={18} />
          </Link>
        </nav>
      </div>
    </>
  );
}
