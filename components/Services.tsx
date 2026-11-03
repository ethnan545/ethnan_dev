"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function Services() {
  const [active, setActive] = useState(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active)!;

  const discuss = () => {
    window.dispatchEvent(new CustomEvent("select-service", { detail: current.title }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-pad bg-gradient-to-b from-white via-brand-soft/50 to-white">
      <div className="container-x grid items-start gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Services for every stage of growth
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
            Pick a service to see what is included. Most projects combine two or three.
          </p>

          <div role="tablist" aria-label="Services" className="mt-8 flex flex-wrap gap-2">
            {SERVICES.map((s) => {
              const selected = s.id === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="service-panel"
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                    selected ? "border-brand bg-brand text-white shadow-pill" : "border-ink/15 bg-white text-ink-soft hover:border-brand hover:text-brand"
                  }`}
                >
                  <s.icon size={16} /> {s.short}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand/20 to-transparent blur-2xl" />
          <div id="service-panel" role="tabpanel" className="glass relative overflow-hidden rounded-[2rem] p-7 shadow-glass sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand"><current.icon size={24} /></span>
                  <h3 className="text-2xl font-black">{current.title}</h3>
                </div>
                <p className="mt-5 leading-relaxed text-ink-soft">{current.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {current.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-bold">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand" /> {item}
                    </li>
                  ))}
                </ul>
                <button onClick={discuss} className="btn-primary mt-8">
                  Discuss this service <ArrowRight size={16} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
