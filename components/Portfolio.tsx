"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function Portfolio() {
  const discuss = (title: string) => {
    window.dispatchEvent(new CustomEvent("select-service", { detail: title }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">What we build</h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            The websites, AI assistants, and automations we create for businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`flex flex-col rounded-[2rem] border border-brand/10 bg-gradient-to-br from-white to-brand-soft/60 p-7 transition hover:shadow-glass lg:col-span-2`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                <s.icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-black">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <li key={t} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-soft ring-1 ring-ink/10">
                    {t}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => discuss(s.title)}
                className="mt-6 inline-flex items-center gap-1 self-start text-sm font-bold text-brand hover:text-brand-dark"
              >
                Start a project <ArrowUpRight size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
