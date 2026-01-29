export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-white py-24 px-6 md:px-12"
    >
      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-900 via-violet-700 to-indigo-900 px-4 py-2 text-sm font-medium text-white">
          <span>⬢</span> What We Do?
        </span>

        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="bg-gradient-to-b from-slate-50 via-violet-600 to-indigo-900 bg-clip-text text-transparent">Innovative Solutions to
          <br />
          Accelerate Your Business</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          From branding to digital transformation, we craft strategies and
          solutions that launch your business into a new orbit of success.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        
        {/* Card 1 — Security (highlighted) */}
        <div className="relative rounded-2xl bg-linear-to-br from-[#1a1443] to-[#2c1d6a] p-8 text-white shadow-lg">
          <h3 className="text-xl font-semibold">Security</h3>

          <p className="mt-4 text-sm text-gray-200">
            Our portfolio of comprehensive and industry-leading products and
            solutions deliver unparalleled protection with reduced complexity
            and lower maintenance costs.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700">
            Learn more →
          </button>

          {/* subtle icon bg */}
          <div className="absolute bottom-4 right-4 opacity-20 text-6xl">
            🛡️
          </div>
        </div>

        {/* Card 2 — Cloud Services */}
        <div className="rounded-2xl bg-[#eef0ff] p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            Cloud Services
          </h3>

          <p className="mt-4 text-sm text-gray-600">
            Cloud computing has fueled digital transformation like no other
            technology disruption. Enterprises need to continuously innovate
            and grow.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-100">
            Learn more →
          </button>
        </div>

        {/* Card 3 — Infrastructure */}
        <div className="rounded-2xl bg-[#eef0ff] p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            Infrastructure
          </h3>

          <p className="mt-4 text-sm text-gray-600">
            In the era of digital disruption, agility, innovation, and
            cost-effective operations are essential for modern businesses.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-100">
            Learn more →
          </button>
        </div>

      </div>
    </section>
  );
}
