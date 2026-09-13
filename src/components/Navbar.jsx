import { useState } from "react";

const NAV_LINKS = ["Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-3 md:flex items-center md:justify-between">
        
        {/* Mobile Menu Button */}
        <div className="flex items-center justify-start md:hidden">
          <button
            className="p-2 -ml-2 text-ink"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center justify-center md:justify-start gap-2"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#7c3aed_0%,#a855f7_50%,#ec4899_100%)] text-white font-display font-bold text-[13px] leading-none shadow-sm">
            DS
          </span>

          <span className="font-display font-bold text-[1.05rem] leading-none text-ink">
            <span>Dev</span>
            <span className="text-pink-500">Stack</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          {/* Home */}
          <li>
            <a
              href="#home"
              className="hover:text-ink transition-colors"
            >
              Home
            </a>
          </li>

          {/* Other Links */}
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-ink transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign In / Sign Up */}
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button className="text-xs sm:text-sm font-medium text-ink/80 hover:text-ink transition-colors whitespace-nowrap">
            Sign In
          </button>

          <button className="bg-brand-gradient text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-medium text-ink/80 bg-white border-t border-gray-100">
          
          {/* Home */}
          <li>
            <a
              href="#home"
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>

          {/* Other Links */}
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}