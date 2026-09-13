const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-10 md:gap-12 items-start">
          <div className="pr-4">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#7c3aed_0%,#a855f7_50%,#ec4899_100%)] text-white font-display font-bold text-[13px] leading-none shadow-sm">
                DS
              </span>
              <span className="font-display font-bold text-[1.05rem] leading-none text-ink">
                <span>Dev</span>
                <span className="text-pink-500">Stack</span>
              </span>
            </a>

            <p className="text-base text-muted mt-4 max-w-md leading-8">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-4 mt-5 text-sm font-medium text-muted">
              <a href="https://github.com" className="hover:text-ink transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" className="hover:text-ink transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" className="hover:text-ink transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title} className="md:justify-self-center">
              <h4 className="font-display font-bold text-2xl text-ink mb-5 uppercase tracking-tight">
                {group.title}
              </h4>
              <ul className="space-y-4 text-base text-muted">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-ink transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-ink transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-ink transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
