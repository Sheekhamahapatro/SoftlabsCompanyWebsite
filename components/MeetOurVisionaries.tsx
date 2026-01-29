"use client";

import { useState } from "react";

type Leader = {
  name: string;
  role: string;
  bio: string[];
  image: string;
  linkedin?: string;
  email?: string;
};

const leaders: Leader[] = [
  {
    name: "Gopal Maheshwari",
    role: "Director – Technology",
    image: "/leaders/gopal.png",
    bio: [
      "Gopal, an entrepreneur in IT and Security domain has more than 22 years of experience in Networking & Network Security domain.",
      "He worked with Radware as Technical Head – India & SAARC. An expert in product management, market analysis, competitive analysis, product positioning.",
      "Build and communicate the value proposition of the end-to-end solution. Support Business Team throughout the sales process."
    ],
    linkedin: "#",
    email: "mailto:info@company.com"
  }
  ,
  
];

export default function MeetOurVisionaries() {
  const [index, setIndex] = useState(0);
  const leader = leaders[index];

  const prev = () =>
    setIndex((index - 1 + leaders.length) % leaders.length);
  const next = () =>
    setIndex((index + 1) % leaders.length);

  return (
    <section
      id="visionaries"
      className="bg-white py-20 px-6"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Title */}
        <h1 className="text-center font-semibold tracking-widest bg-linear-to-b from-zinc-300 via-violet-500 to-violet-800 bg-clip-text text-transparent text-5xl">
          MEET OUR VISIONARIES
        </h1>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* Image */}
          <div className="flex justify-center">
            <div className="h-72 w-72 bg-gray-200 md:h-80 md:w-80">
              <img
                src={leader.image}
                alt={leader.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-black">
              {leader.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-gray-600">
              {leader.role}
            </p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700">
              {leader.bio.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              {leader.linkedin && (
                <a
                  href={leader.linkedin}
                  className="rounded bg-black p-2 text-white hover:bg-gray-800"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              )}
              {leader.email && (
                <a
                  href={leader.email}
                  className="rounded bg-black p-2 text-white hover:bg-gray-800"
                  aria-label="Email"
                >
                  ✉
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-end gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black  bg-black hover:bg-grey hover:text-white transition"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-black hover:bg-black hover:text-white transition"
            aria-label="Next"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
