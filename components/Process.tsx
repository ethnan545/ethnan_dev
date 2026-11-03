"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Discover", text: "We learn about your business, your customers, and what you want to achieve." },
  { title: "Plan", text: "We agree on scope, structure, and the tools that fit your goals and budget." },
  { title: "Design & build", text: "We design the experience, build it, and share progress along the way." },
  { title: "Launch", text: "We test thoroughly, then take your project live and hand over what you need." },
  { title: "Support & improve", text: "We keep things updated and secure, and add improvements as you grow." },
];

export default function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container-x">
        <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">How a project works</h2>
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <div aria-hidden className="absolute left-[22px] top-2 hidden h-[calc(100%-1rem)] w-px bg-brand/20 max-lg:block lg:left-0 lg:right-0 lg:top-[22px] lg:h-px lg:w-full" />
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative flex gap-4 lg:block"
            >
              <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-sm font-black text-white shadow-pill">{i + 1}</span>
              <div className="lg:mt-5">
                <h3 className="text-lg font-black">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
