"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LetsGrowTogetherPage() {
  return (
    <main className="bg-white text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold md:text-6xl"
          >
            Let’s Grow Together
          </motion.h1>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              A GREAT PLACE FOR INSPIRATION AND INNOVATION
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              A team of forward-thinking professionals from diverse backgrounds,
              united by our passion for excellence. We practice an open-door policy,
              so our members can approach our leaders to talk about growth, address
              their grievances, or get advice.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              We believe in acknowledging ambition, which reflects in our quarterly
              rewards and recognition program.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-4">
              We care for our team, which is why we're here to offer the best.
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              We offer best-in-class benefits including Group Mediclaim policy,
              personal accident insurance policy, and Term life insurance policy.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Apart from privilege leaves and miscellaneous leaves, we also provide
              special leaves to our employees to support them during examinations
              and for bereavement in the immediate family.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[400px] w-full">
            <Image
              src="/grow.jpeg"
              alt="Employee care and workplace wellbeing illustration"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* ================= ILLUSTRATION CAPTION ================= */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-slate-500">
            Giant hands holding tiny office workers — a concept of employee care,
            wellbeing at work, workplace perks and benefits, and support for
            professional growth.
          </p>
        </div>
      </section>

    </main>
  );
}
