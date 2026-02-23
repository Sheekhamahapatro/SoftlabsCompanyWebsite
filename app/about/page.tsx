"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 gap-10 sm:px-6 sm:gap-16 md:grid-cols-2 md:items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
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
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
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
            className="mx-auto mt-2 max-w-3xl text-lg text-gray-600"
          >
            To be the preferred partner for data protection, information security,
            and privacy by delivering high-value, cost-effective services.
          </motion.p>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 sm:px-6 sm:gap-8 md:grid-cols-3">
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

      {/* ================= VISIONARIES ================= */}
      <section className="py-10 bg-slate-50 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Meet Our Visionaries
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-6 sm:mt-12 sm:gap-8">
            {visionaries.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.25 } }}
                className="group relative w-full max-w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:border-violet-300 hover:shadow-2xl sm:w-[320px]"
              >
                {/* Square image - fills top of card */}
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900">{v.name}</h3>
                  <p className="mt-1 text-sm font-medium text-violet-600">{v.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{v.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* ================= OUR TEAM ================= */}
<section id="our-team" className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Our Team
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600">
            Experts in cybersecurity, cloud, and digital transformation
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 sm:mt-12 sm:gap-8">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                className="group relative w-full max-w-[240px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:border-violet-300 hover:shadow-xl sm:w-[240px]"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-linear-to-br from-violet-100 to-violet-200">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="240px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-violet-500 to-violet-700">
                      <span className="text-4xl font-bold text-white">
                        {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-bold text-gray-900">{m.name}</h4>
                  <p className="mt-1 text-sm font-medium text-violet-600">{m.role}</p>
                </div>
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
    image: "/Gopal-Sir.jpeg",
  },
  {
    name: "Munish Paul Kumar",
    role: "Director",
    bio: "Ensuring scalable and efficient service delivery.",
    image: "/Munish-sir.jpeg",
  },

];

const team = [
  { name: "Sanjeev Kumar", role: "Sales Head", image: null },
  { name: "Vikram Singh Bhau", role: "Head – Engineering", image: "/Vikram-Sir.jpeg" },
  { name: "Shiv Raj", role: "Lead Solution Architect", image: null },
  { name: "DevSecOps Engineer", role: "Automation", image: null },
];
