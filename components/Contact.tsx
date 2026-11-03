"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/data";
import { submitContact } from "@/lib/contact";

type Errors = Partial<Record<"name" | "email" | "service" | "details", string>>;
const NOT_SURE = "Not sure yet";

export default function Contact() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [simulated, setSimulated] = useState(false);

  // Lets the Services section pre-select a service.
  useEffect(() => {
    const handler = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener("select-service", handler);
    return () => window.removeEventListener("select-service", handler);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot: bots fill hidden fields

    const v = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      service,
      details: String(data.get("details") || "").trim(),
    };

    const next: Errors = {};
    if (!v.name) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) next.email = "Enter a valid email address.";
    if (!v.service) next.service = "Choose the service you need.";
    if (v.details.length < 10) next.details = "Tell us a little about your project (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await submitContact(v);
      setSimulated(res.simulated);
      setStatus("done");
      form.reset();
      setService("");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p role="alert" className="mt-1.5 text-xs font-bold text-red-600">{errors[k]}</p> : null;

  return (
    <section id="contact" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">Tell us about your project</h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Share a few details and we will get back to you by email to talk through your goals and the best way forward.
          </p>

          <ul className="mt-8 space-y-3">
            <li>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-white p-4 transition hover:border-brand hover:shadow-pill">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white"><MessageCircle size={20} /></span>
                <span><span className="block text-sm font-black">Chat on WhatsApp</span><span className="text-sm text-ink-soft">{CONTACT.phone}</span></span>
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-white p-4 transition hover:border-brand hover:shadow-pill">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Phone size={20} /></span>
                <span><span className="block text-sm font-black">Call</span><span className="text-sm text-ink-soft">{CONTACT.phone}</span></span>
              </a>
            </li>
            {CONTACT.email && (
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-white p-4 transition hover:border-brand hover:shadow-pill">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Mail size={20} /></span>
                  <span><span className="block text-sm font-black">Email</span><span className="text-sm text-ink-soft">{CONTACT.email}</span></span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="glass relative rounded-[2rem] p-6 shadow-glass sm:p-9 lg:col-span-3">
          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center" role="status">
                <CheckCircle2 size={48} className="mx-auto text-brand" />
                <h3 className="mt-4 text-2xl font-black">Message received</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
                  Thanks for reaching out. We will reply to the email address you provided.
                </p>
                {simulated && (
                  <p className="mx-auto mt-4 max-w-sm rounded-xl bg-brand-soft px-4 py-3 text-xs font-bold text-brand">
                    Demo mode: the form is not connected to a backend yet, so nothing was sent.
                  </p>
                )}
                <button className="btn-ghost mt-6" onClick={() => setStatus("idle")}>Send another message</button>
              </motion.div>
            ) : (
              <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-5">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-bold">Name</label>
                    <input id="name" name="name" autoComplete="name" className="field" placeholder="Your name" aria-invalid={!!errors.name} />
                    {err("name")}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-bold">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" className="field" placeholder="you@company.com" aria-invalid={!!errors.email} />
                    {err("email")}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-bold">Company <span className="font-normal text-ink-faint">(optional)</span></label>
                    <input id="company" name="company" autoComplete="organization" className="field" placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-bold">Service required</label>
                    <select id="service" value={service} onChange={(e) => setService(e.target.value)} className="field" aria-invalid={!!errors.service}>
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value={NOT_SURE}>{NOT_SURE}</option>
                    </select>
                    {err("service")}
                  </div>
                </div>
                <div>
                  <label htmlFor="details" className="mb-1.5 block text-sm font-bold">Project details</label>
                  <textarea id="details" name="details" rows={5} className="field resize-y" placeholder="What are you looking to build or automate?" aria-invalid={!!errors.details} />
                  {err("details")}
                </div>

                {status === "error" && (
                  <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                    We could not send your message. Check your connection and try again.
                  </p>
                )}

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70 sm:w-auto sm:justify-self-start">
                  {status === "sending" ? <><Loader2 size={16} className="animate-spin" /> Sending</> : <><Send size={16} /> Send message</>}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
