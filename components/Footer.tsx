"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="mt-auto bg-white px-6 py-7">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 md:grid-cols-4">

        {/* Logo */}
        <div className="flex items-center">
          <img src="/LOGO.png" alt="SoftLabs Infotech" className="h-20" />
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            Get in Touch
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex gap-3">
              <span>📍</span>
              <span>
                303 Skyline Building, 85, Nehru Place, New Delhi,<br />
                Delhi 110019
              </span>
            </li>
            <li className="flex gap-3">
              <span>✉</span>
              <span>support@softlabs.com</span>
            </li>
            <li className="flex gap-3">
              <span>📞</span>
              <span>+91 11-400-73103</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            Stay Connected
          </h4>

          <p className="mt-4 text-sm text-gray-600">
            Whether you’re managing tasks, generating ideas, or analyzing data.
          </p>

          <div className="mt-4 flex gap-3">
            {socialIcons.map(({ name, svg }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-violet-700 text-white transition
                hover:-translate-y-1 hover:bg-violet-600 hover:shadow-lg"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            Join a Newsletter
          </h4>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600
              focus:border-violet-500 focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-violet-700 px-6 py-2 text-sm font-semibold text-white transition
              hover:bg-violet-600 hover:shadow-md disabled:opacity-60"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>

            {success && (
              <p className="text-xs text-green-600">
                Thanks for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Softlabs. All rights reserved.
      </div>
    </footer>
  );
}

/* Social Icons */
const socialIcons = [
  {
    name: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM7.5 8H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.6V24h-5v-7.8c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.3V24h-5z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M24 4.5c-.9.4-1.8.6-2.8.8 1-.6 1.8-1.6 2.1-2.8-.9.6-2 .9-3.1 1.2-1.8-1.9-5-1.8-6.8.3-1.2 1.4-1.6 3.3-1 5-3.9-.2-7.4-2-9.7-4.8-1.3 2.2-.6 5 1.6 6.4-.8 0-1.6-.2-2.3-.6 0 2.3 1.6 4.4 3.9 4.8-.7.2-1.4.3-2.1.1.6 2 2.5 3.4 4.6 3.4C5.3 20.5 2.7 21.3 0 21c2.2 1.4 4.8 2.2 7.6 2.2 9.1 0 14.1-7.5 14.1-14 0-.2 0-.4 0-.6.9-.6 1.7-1.5 2.3-2.4z" />
      </svg>
    ),
  },
];
