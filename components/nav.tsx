"use client";

import { useEffect, useState } from "react";

const ACCENT = "#6366F1";

export default function Nav() {
  const [isHidden, setIsHidden] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const footerThreshold = docHeight - windowHeight - 200;

      if (scrollY < 50 || scrollY > footerThreshold) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#thesis", label: "Thesis" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#stack", label: "Stack" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ transform: isHidden ? "translateY(-110%)" : "translateY(0)" }}
    >
      <div className="border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold text-gray-900 tracking-tight">
                Specialist AI
              </span>
              <span
                className="text-[10px] tracking-widest uppercase font-medium"
                style={{ color: ACCENT }}
              >
                Caleb Newton
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <a
              href="https://github.com/calebnewtonusc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 hover:border-gray-300"
              style={{ borderColor: "#f0f0f0", color: "#0a0a0a" }}
            >
              GitHub
            </a>
          </nav>

          <button
            className="md:hidden text-gray-400 hover:text-gray-700 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/calebnewtonusc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
