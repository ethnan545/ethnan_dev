"use client";
import { motion } from "framer-motion";
import { Gauge, Handshake, Puzzle, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

const reasons = [
  { icon: Puzzle, title: "One team, whole solution", text: "Website, chatbot, and automation designed together so they work as one system." },
  { icon: Sparkles, title: "Modern, considered design", text: "Clean interfaces with careful typography and spacing that reflect your brand." },
  { icon: Smartphone, title: "Built for every screen", text: "Responsive from phones to wide desktops, tested before launch." },
  { icon: Gauge, title: "Fast by default", text: "Lightweight code and optimized assets so pages load quickly." },
  { icon: Handshake, title: "Clear communication", text: "Plain-language updates and a defined scope, so there are no surprises." },
  { icon: ShieldCheck, title: "Support after launch", text: "Maintenance, security updates, and improvements when you need them." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-gradient-to-b from-white to-brand-soft/60">
      <div className="container-x">
        <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">Why businesses work with EthnanDev</h2>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-pill"><r.icon size={22} /></span>
              <h3 className="mt-4 text-lg font-black">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
