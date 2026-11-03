"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="glass hidden rounded-full px-3 py-2 shadow-pill lg:flex lg:items-center lg:gap-1">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-sm font-bold text-ink-soft transition hover:bg-brand-soft hover:text-brand">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-1 flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-bold text-ink shadow-sm ring-1 ring-ink/10 transition hover:ring-brand">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white"><CalendarCheck size={16} /></span>
            Book a Discovery Call
          </a>
        </nav>

        <button
          className="glass grid h-11 w-11 place-items-center rounded-full shadow-pill lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-3 flex max-w-6xl flex-col gap-1 rounded-3xl p-3 shadow-glass lg:hidden"
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-ink hover:bg-brand-soft">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-1">Book a Discovery Call</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
