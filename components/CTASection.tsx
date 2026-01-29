"use client";

import { useState } from "react";
import QueryModal from "./QueryModal";

export default function CTASection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative bg-linear-to-b from-violet-400 via-violet-600 to-violet-900 w-full px-4 py-10 mb-10">
        {/* Background */}
       
        <div className="mx-auto max-w-9xl">
          <div className="rounded-3xl border border-white/20 bg-white/10 px-6 py-16 text-center text-white backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:px-16">
            
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Ready to simplify your workflow?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm text-white/90 md:text-base">
              Start free today and experience the difference in less than 10 minutes
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              
              {/* Primary CTA */}
              <a
                href="/contact"
                className="relative inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-blue-500
                  shadow-[0_0_0_rgba(59,130,246,0.6)]
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
              >
                Let’s Connect →
              </a>

              {/* Secondary CTA */}
              <button
                onClick={() => setOpen(true)}
                className="relative inline-flex items-center justify-center rounded-xl bg-black/40 px-10 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-black/60
                  shadow-[0_0_0_rgba(255,255,255,0.4)]
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
              >
                Ask Queries →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <QueryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
