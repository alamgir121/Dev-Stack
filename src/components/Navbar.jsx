import { useState } from "react";

const NAV_LINKS = ["Technologies", "Projects", "About", "Contact"];
const HOME_MENU_ITEMS = [
  { label: "Overview", href: "#home" },
  { label: "Why Dev Stack", href: "#about" },
  { label: "Stack Builder", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-3 md:flex items-center md:justify-between">
        <div className="flex items-center justify-start md:hidden">
          <button
            className="p-2 -ml-2 text-ink"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        <a href="#home" className="flex items-center justify-center md:justify-start gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#7c3aed_0%,#a855f7_50%,#ec4899_100%)] text-white font-display font-bold text-[13px] leading-none shadow-sm">
            DS
          </span>
          <span className="font-display font-bold text-[1.05rem] leading-none text-ink">
            <span>Dev</span>
            <span className="text-pink-500">Stack</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          <li className="relative">
            <button
              type="button"
              onClick={() => setHomeMenuOpen((open) => !open)}
              className="hover:text-ink transition-colors"
            >
              Home
            </button>

            {homeMenuOpen && (
              <div className="absolute left-0 top-full mt-3 w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                {HOME_MENU_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-gray-50 hover:text-ink"
                    onClick={() => setHomeMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-ink transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button className="text-xs sm:text-sm font-medium text-ink/80 hover:text-ink transition-colors whitespace-nowrap">
            Sign In
          </button>
          <button className="bg-brand-gradient text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-medium text-ink/80 bg-white border-t border-gray-100">
          <li>
            <button
              type="button"
              className="block w-full py-2 text-left"
              onClick={() => setHomeMenuOpen((open) => !open)}
            >
              Home
            </button>
            {homeMenuOpen && (
              <div className="ml-3 mt-1 space-y-1 rounded-lg bg-gray-50 p-2">
                {HOME_MENU_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-md px-2 py-2 text-sm text-ink/80"
                    onClick={() => {
                      setHomeMenuOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>

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
