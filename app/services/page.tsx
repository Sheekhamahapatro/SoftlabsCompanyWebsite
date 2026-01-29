"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const infrastructureServices = [
  {
    title: "End-to-End Infrastructure Implementation",
    description:
      "Design, deployment, and commissioning of complete HPE infrastructure environments including ProLiant Servers, Synergy, OneView, dHCI, SimpliVity, and HPE Storage, ensuring seamless production rollout.",
  },
  {
    title: "HPE Storage Solutions",
    description:
      "Installation, configuration, optimization, and data migration for HPE MSA, Alletra, and enterprise storage platforms with focus on performance, availability, and data integrity.",
  },
  {
    title: "Backup & Data Protection Solutions",
    description:
      "End-to-end implementation of HPE StoreOnce backup appliances integrated with leading backup platforms, aligned with recovery objectives and compliance requirements.",
  },
  {
    title: "High-Performance Computing (HPC)",
    description:
      "Deployment of HPC infrastructure including hardware setup, networking, OS installation, and workload readiness for analytics, research, and engineering workloads.",
  },
  {
    title: "Operating System Implementation & Clustering",
    description:
      "Installation and configuration of Windows Server and Enterprise Linux (RHEL, SUSE, Ubuntu) with system hardening, performance tuning, and high-availability clustering.",
  },
  {
    title: "VMware Virtualization Services",
    description:
      "Design and implementation of VMware ESXi and vCenter environments optimized for scalability, performance, and private or hybrid cloud operations.",
  },
  {
    title: "HPE VM Essentials",
    description:
      "Proof of Concept and full-scale implementation of HPE VM Essentials to help organizations transition to modern virtualization platforms with reduced risk.",
  },
  {
    title: "Zerto Disaster Recovery & Business Continuity",
    description:
      "Deployment and configuration of Zerto solutions enabling rapid replication, failover, and recovery across on-premises and hybrid environments.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-slate-50">
        
        <div className="mx-auto max-w-7xl px-6 text-center">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900 md:text-5xl"
          >
            Our <span className="text-violet-700">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            We provide comprehensive security solutions designed to protect,
            monitor, and strengthen your business infrastructure.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16">

          {/* Cybersecurity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-2 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Cybersecurity
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Our cybersecurity services protect your digital assets against
                evolving threats. We design, implement, and manage end-to-end
                security solutions tailored to your organization.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
                <li>Network & Endpoint Security</li>
                <li>Cloud & Application Security</li>
                <li>SOC & Threat Monitoring</li>
                <li>Compliance & Risk Management</li>
              </ul>
            </div>

            <Image
              src="/cybersecurity.jpg"
              alt="Cybersecurity"
              width={520}
              height={380}
              className="rounded-xl"
            />
          </motion.div>

          {/* Surveillance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-2 items-center"
          >
            <Image
              src="/Camera.jpg"
              alt="Surveillance"
              width={520}
              height={380}
              className="rounded-xl md:order-2"
            />

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Surveillance
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Our intelligent surveillance solutions help you monitor,
                analyze, and secure physical environments with advanced video
                analytics and real-time monitoring.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
                <li>IP Camera Solutions</li>
                <li>Video Analytics & AI Monitoring</li>
                <li>Access Control Systems</li>
                <li>24/7 Monitoring & Alerts</li>
              </ul>
            </div>
          </motion.div>
{/* ================= INFRASTRUCTURE SERVICES ================= */}
<div className="mt-24">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center text-3xl font-bold text-gray-900"
  >
    Infrastructure & Platform Services
  </motion.h2>

  <div className="mt-16 grid gap-8 md:grid-cols-2">
    {infrastructureServices.map((service, i) => (
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08 }}
        viewport={{ once: true }}
        className="rounded-xl border border-gray-200 p-8 hover:shadow-lg transition"
      >
        <h3 className="text-xl font-semibold text-gray-900">
          {service.title}
        </h3>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    ))}
  </div>
</div>

        </div>
      </section>
    </main>
  );
}
