"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32">

          {/* TEXT CONTENT */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold bg-linear-to-b from-zinc-300 via-violet-500 to-violet-800 bg-clip-text text-transparent">
              About Us
            </h2>

            <motion.p
              className="mt-6 text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We are one of India’s leading System Integrators in Cyber Security,
              providing end-to-end network and security solutions that help
              organizations maximize their IT investments.
            </motion.p>

            <motion.p
              className="mt-4 text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our mission is to be the preferred partner for data protection,
              information security, and privacy requirements. With a
              customer-centric, problem-solving approach, we design and
              implement solutions that truly meet client needs.
            </motion.p>

            <motion.p
              className="mt-4 text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              By integrating resources, processes, and technologies, we deliver
              high-value, cost-effective services and guide companies in
              selecting and deploying the right technologies.
            </motion.p>

            <motion.div
              className="mt-10 inline-block rounded-lg bg-linear-to-b from-violet-600 via-amber-300 to-violet-600 p-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <button className="block w-full rounded-[5px] bg-white px-8 py-3 text-violet-700 transition hover:bg-violet-600 hover:text-white text-md font-bold">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* IMAGE (Desktop only) */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/technology.png"
              alt="Cyber Security Illustration"
              className="w-full max-w-xl ml-auto"
            />
          </motion.div>

          {/* MOBILE BACKGROUND IMAGE */}
          <motion.div
            className="absolute inset-0 lg:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/technology.png"
              alt="Cyber Security Illustration"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white/80" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
