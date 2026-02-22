"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">

        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-16 lg:gap-32">

          {/* TEXT CONTENT - single animation for faster load */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl bg-linear-to-b from-zinc-300 via-violet-500 to-violet-800 bg-clip-text text-transparent">
              About Us
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We are one of India’s leading System Integrators in Cyber Security,
              providing end-to-end network and security solutions that help
              organizations maximize their IT investments.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to be the preferred partner for data protection,
              information security, and privacy requirements. With a
              customer-centric, problem-solving approach, we design and
              implement solutions that truly meet client needs.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              By integrating resources, processes, and technologies, we deliver
              high-value, cost-effective services and guide companies in
              selecting and deploying the right technologies.
            </p>

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

          {/* IMAGE (Desktop) - Next/Image for faster loading */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/technology.png"
              alt="Cyber Security Illustration"
              width={520}
              height={400}
              sizes="(max-width: 1024px) 0px, 520px"
              className="w-full max-w-xl ml-auto"
              loading="lazy"
            />
          </motion.div>

          {/* MOBILE - background image, no animation for instant show */}
          <div className="absolute inset-0 lg:hidden -z-[1]">
            <Image
              src="/technology.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 0px"
              className="object-cover opacity-20"
              loading="lazy"
              aria-hidden
            />
            <div className="absolute inset-0 bg-white/80 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
