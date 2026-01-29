"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-16 md:grid-cols-2 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 lg:text-5xl">
              About <span className="text-violet-700">Softlabs</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We are one of India’s leading System Integrators in Cyber Security,
              delivering end-to-end network and security solutions.
            </p>

            <p className="mt-4 text-gray-600">
              Our customer-centric approach ensures scalable, secure, and
              future-ready digital infrastructures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/technology.png"
              alt="Technology"
              width={520}
              height={520}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600"
          >
            To be the preferred partner for data protection, information security,
            and privacy by delivering high-value, cost-effective services.
          </motion.p>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200 p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">{v.title}</h3>
              <p className="mt-4 text-gray-600">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= LEADER ================= */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid gap-16 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/leader.png"
              alt="Leader"
              width={420}
              height={420}
              className="rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Gopal Maheshwari
            </h2>
            <p className="mt-1 text-violet-700 font-semibold">
              Director – Technology
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed">
              With 22+ years of experience in Networking & Cyber Security,
              Gopal leads Softlabs’ technology vision across enterprise
              and global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= VISIONARIES ================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Meet Our Visionaries
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {visionaries.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-8 shadow-sm hover:shadow-lg transition"
              >
                <Image
                  src={v.image}
                  alt={v.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <h3 className="mt-4 font-semibold text-gray-900">{v.name}</h3>
                <p className="text-sm text-violet-700">{v.role}</p>
                <p className="mt-4 text-sm text-gray-600">{v.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Our Team
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Experts in cybersecurity, cloud, and digital transformation
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition"
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  width={100}
                  height={100}
                  className="mx-auto rounded-full"
                />
                <h4 className="mt-4 font-semibold text-gray-900">{m.name}</h4>
                <p className="text-sm text-gray-500">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= DATA ================= */

const values = [
  { title: "Security First", description: "Security is embedded in everything we build." },
  { title: "Customer Centric", description: "Solutions aligned to real business needs." },
  { title: "Innovation Driven", description: "Continuously evolving with modern threats." },
];

const visionaries = [
  {
    name: "Gopal Maheshwari",
    role: "Director – Technology",
    bio: "Driving innovation and security-first architectures.",
    image: "/leader.png",
  },
  {
    name: "Anita Verma",
    role: "Director – Operations",
    bio: "Ensuring scalable and efficient service delivery.",
    image: "/leader.png",
  },
  {
    name: "Rahul Singh",
    role: "Head – Security",
    bio: "Threat intelligence and SOC excellence leader.",
    image: "/leader.png",
  },
];

const team = [
  { name: "SOC Analyst", role: "Security Operations", image: "/leader.png" },
  { name: "Cloud Architect", role: "Cloud Security", image: "/leader.png" },
  { name: "Network Engineer", role: "Infrastructure", image: "/leader.png" },
  { name: "DevSecOps Engineer", role: "Automation", image: "/leader.png" },
];
