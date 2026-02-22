export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-white py-16 px-4 sm:py-24 sm:px-6 md:px-12"
    >
      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-900 via-violet-700 to-indigo-900 px-3 py-1.5 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-sm">
          <span>⬢</span> What We Do?
        </span>

        <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:mt-6 sm:text-3xl md:text-5xl">
          <span className="bg-gradient-to-b from-slate-50 via-violet-600 to-indigo-900 bg-clip-text text-transparent">Innovative Solutions to
          <br />
          Accelerate Your Business</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 sm:mt-6 sm:text-base">
          From branding to digital transformation, we craft strategies and
          solutions that launch your business into a new orbit of success.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3">
        
        {/* Card 1 — Security (highlighted) */}
        <div className="relative rounded-2xl bg-linear-to-br from-[#1a1443] to-[#2c1d6a] p-6 text-white shadow-lg sm:p-8">
          <h3 className="text-xl font-semibold">Security</h3>

          <p className="mt-4 text-sm text-gray-200">
            Our portfolio of comprehensive and industry-leading products and
            solutions deliver unparalleled protection with reduced complexity
            and lower maintenance costs.
          </p>

          <button className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700">
            Learn more →
          </button>

          {/* subtle icon bg */}
          <div className="absolute bottom-1 right-1 opacity-20 text-6xl">
           <img width="150" height="150" src="https://img.icons8.com/ios-filled/100/FFFFFF/security-shield-green.png" alt="security-shield-green"/>
          </div>
        </div>

        {/* Card 2 — Cloud Services */}
        <div className="rounded-2xl bg-linear-to-br from-[#1a1443] to-[#2c1d6a] p-6 shadow-lg sm:p-8">
          <h3 className="text-lg font-semibold text-white">
            Cloud Services
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            Cloud computing has fueled digital transformation like no other
            technology disruption. Enterprises need to continuously innovate
            and grow.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-100">
            Learn more →
          </button>

          {/* subtle icon bg */}
          <div className="absolute bottom-1 right-1 opacity-20 text-6xl">
           <img width="100" height="100" src="https://img.icons8.com/external-glyph-andi-nur-abdillah/64/FFFFFF/external-Cloud-service-web-hosting-(glyph)-glyph-andi-nur-abdillah.png" alt="external-Cloud-service-web-hosting-(glyph)-glyph-andi-nur-abdillah"/>
          </div>
        </div>

        {/* Card 3 — Infrastructure */}
        <div className="rounded-2xl bg-linear-to-br from-[#1a1443] to-[#2c1d6a] p-6 shadow-lg sm:p-8">
          <h3 className="text-lg font-semibold text-white">
            Infrastructure
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            In the era of digital disruption, agility, innovation, and
            cost-effective operations are essential for modern businesses.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-100">
            Learn more →
          </button>
        </div>

      </div>
    </section>
  );
}
