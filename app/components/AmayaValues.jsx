'use client';
import React from 'react';

const AmayaComingSoon = () => {
  return (
    <section className="py-20 bg-[#f6f1e7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-[2.8rem] bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-10 md:p-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f6f1e7] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#1f2a2d]" />
                <p className="text-xs tracking-[0.3em] uppercase text-gray-700">
                  AMAYA • Launching Soon
                </p>
              </div>

              <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-gray-900 leading-[1.15]">
                We’re Coming Soon ✨
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed max-w-xl text-base md:text-lg">
                A new way of living is on its way. AMAYA is being crafted with
                comfort, elegance, and peaceful community living in mind.
              </p>

              <p className="mt-6 text-xs text-gray-500 tracking-wide">
                Stay tuned for launch updates.
              </p>
            </div>

            {/* Right Design Block */}
            <div className="relative bg-[#1f2a2d] p-10 md:p-16 flex items-center justify-center overflow-hidden">
              {/* <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" /> */}

              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/assests/Render.jpg"
                  alt="Coming Soon"
                  className="h-full w-full object-cover opacity-25"
                />
              </div>

              {/* <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-[#F7D34A]/20 blur-3xl" /> */}

              <div className="relative text-center max-w-md">
                {/* <div className="mx-auto h-20 w-20 rounded-[1.8rem] bg-white/10 border border-white/15 flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                  <span className="text-3xl text-white">⏳</span>
                </div> */}

                <h3 className="mt-7 text-2xl md:text-3xl font-semibold text-white">
                  Launching Soon
                </h3>

                <p className="mt-3 text-white/70 text-sm md:text-base mx-auto leading-relaxed">
                  We’re working on something beautiful. Experience a calm and premium
                  lifestyle with AMAYA.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AmayaComingSoon;
