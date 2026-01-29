"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Later you can connect API or email service
    alert("Thank you! Our team will contact you soon.");
  };

  return (
    <main className="bg-slate-50 min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-slate-800">
          Contact Us
        </h1>
        <p className="text-center text-slate-600 mt-4">
          Tell us about your requirements and our experts will reach out to you.
        </p>

        {/* Form Card */}
        <div className="mt-12 bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 placeholder:text-gray-400 text-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 placeholder:text-gray-400 text-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 placeholder:text-gray-400 text-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Select Service
              </label>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 placeholder:text-gray-400 text-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              >
                <option value="">Choose a service</option>
                <option>End-to-End Infrastructure Implementation</option>
                <option>HPE Storage Solutions</option>
                <option>Backup & Data Protection</option>
                <option>High-Performance Computing (HPC)</option>
                <option>Operating System Implementation & Clustering</option>
                <option>VMware Virtualization Services</option>
                <option>HPE VM Essentials</option>
                <option>Zerto Disaster Recovery</option>
                <option>Cybersecurity Solutions</option>
                <option>Surveillance Solutions</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Comments / Requirements
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Your message..."
                required
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 placeholder:text-gray-400 text-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-4 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Submit Request
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}
