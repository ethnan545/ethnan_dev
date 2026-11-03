"use client";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { TOOLS } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:pt-40">
      <div aria-hidden className="grid-lines pointer-events-none absolute -right-20 top-10 h-[520px] w-[620px] opacity-70" />

      <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:gap-x-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:col-span-7 lg:col-start-6 lg:text-[44px] xl:text-5xl"
        >
          Building Digital Experiences.{" "}
          <span className="text-brand">Automating Business Growth.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mt-52"
        >
          <p className="max-w-sm text-base leading-relaxed text-ink-soft">
            We help businesses grow through modern website development, intelligent AI solutions, and powerful business automation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary"><CalendarCheck size={16} /> Book a Discovery Call</a>
            <a href="#portfolio" className="btn-ghost">See Our Work <ArrowRight size={16} /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container-x relative mt-20 text-center"
      >
        <p className="text-base text-ink-faint">Tools and platforms we build with</p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-black tracking-tight text-ink/80">
          {TOOLS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
