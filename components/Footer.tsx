import Logo from "./Logo";
import { NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-gradient-to-b from-white to-brand-soft/60 px-5 py-14 sm:px-8">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">Building Digital Experiences. Automating Business Growth.</p>
        </div>
        <nav aria-label="Footer">
          <h3 className="font-black">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {NAV_LINKS.map((l) => <li key={l.href}><a className="hover:text-brand" href={l.href}>{l.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <h3 className="font-black">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {SERVICES.map((s) => <li key={s.id}><a className="hover:text-brand" href="#services">{s.title}</a></li>)}
          </ul>
        </div>
      </div>
      <p className="container-x mt-12 border-t border-ink/10 pt-6 text-xs text-ink-faint">
        © {new Date().getFullYear()} EthnanDev. All rights reserved.
      </p>
    </footer>
  );
}
