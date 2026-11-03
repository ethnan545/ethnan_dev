"use client";
import { motion } from "framer-motion";
import { Layers, MessagesSquare, Zap } from "lucide-react";

const points = [
  { icon: Layers, title: "Websites that do a job", text: "Every page has a purpose: explain, build trust, or start a conversation." },
  { icon: Zap, title: "Automation that saves time", text: "We remove repetitive tasks so your team can focus on customers." },
  { icon: MessagesSquare, title: "AI that stays practical", text: "Assistants and tools built around a real problem in your business." },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            A small team that builds the site, the assistant, and the automation behind it.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
            EthnanDev is a digital solutions agency. We design and develop websites, then connect them to AI chatbots and automated workflows so the whole customer journey, from first visit to follow-up, runs smoothly.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
            You work directly with the people building your project, in plain language, with a clear plan at every step.
          </p>
        </motion.div>

        <ul className="space-y-4">
          {points.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 rounded-3xl border border-brand/10 bg-gradient-to-br from-white to-brand-soft/60 p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand text-white"><p.icon size={20} /></span>
              <div>
                <h3 className="font-black">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
