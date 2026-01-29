"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Cpu,
  Cloud,
  Lock,
  LifeBuoy,
} from "lucide-react";

export default function ValuePropositionPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            Secure. Scalable. Future-Ready.
          </motion.h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We empower enterprises with resilient IT infrastructure, advanced
            cybersecurity, and intelligent technology solutions that keep your
            business protected and always ahead.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUE GRID ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold mb-14">
            Why Organizations Trust Us
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {valuePoints.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <item.icon className="h-10 w-10 text-indigo-600" />
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 text-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
              <p className="mt-2 text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ENTERPRISE MESSAGE ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Enterprise-Grade Technology, Delivered with Precision
          </h2>
          <p className="mt-6 text-slate-600">
            From hybrid infrastructure and virtualization to cybersecurity,
            disaster recovery, and high-performance computing, we design
            and implement solutions that ensure performance, protection,
            and long-term scalability.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-200 bg-indigo-50/60 p-12 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-900">
            Let’s Build a Secure Digital Future Together
          </h3>
          <p className="mt-4 text-slate-600">
            Talk to our experts and discover how we can strengthen, modernize,
            and protect your IT environment.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-500 transition"
            >
              Contact Our Team
            </a>
            <a
              href="/services"
              className="rounded-xl border border-slate-300 px-8 py-3 font-semibold hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

const valuePoints = [
  {
    icon: ShieldCheck,
    title: "Security-First Approach",
    description:
      "Every solution we deliver is built with cybersecurity at its core, ensuring protection at every layer.",
  },
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description:
      "Design and deployment of scalable server, storage, and virtualization environments.",
  },
  {
    icon: Cloud,
    title: "Hybrid & Cloud Ready",
    description:
      "Seamless integration across on-premises, private cloud, and public cloud platforms.",
  },
  {
    icon: Cpu,
    title: "High-Performance Solutions",
    description:
      "Optimized architectures for analytics, AI, research, and compute-intensive workloads.",
  },
  {
    icon: Lock,
    title: "Compliance & Governance",
    description:
      "Solutions aligned with global security standards and regulatory requirements.",
  },
  {
    icon: LifeBuoy,
    title: "24×7 Expert Support",
    description:
      "Round-the-clock monitoring, management, and rapid response for business continuity.",
  },
];

const stats = [
  { value: "20+ Years", label: "Industry Experience" },
  { value: "500+ Projects", label: "Successful Deployments" },
  { value: "99.99% Uptime", label: "Infrastructure Reliability" },
  { value: "24×7", label: "Support & Monitoring" },
];
