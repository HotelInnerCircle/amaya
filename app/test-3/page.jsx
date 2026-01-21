import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* ONE FULL BACKGROUND IMAGE (TOP TO FOOTER) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-seniors.jpg"
          alt="Amaya Full Background"
          fill
          priority
          className="object-cover object-top"
        />

        {/* Optional: slight overlay for readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-16 py-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left Logo */}
          <div className="flex items-center">
            <Image
              src="/assests/Amaya_Logo_Final_copy.png"
              alt="Amaya Logo"
              width={160}
              height={60}
              priority
              className="h-auto w-[120px] md:w-[160px] object-contain"
            />
          </div>

          {/* Right Button */}
          <button className="rounded-full border border-black/30 bg-white/60 px-6 py-2 text-[11px] tracking-[0.2em] uppercase text-black hover:bg-black hover:text-white transition">
            PRE-LAUNCH ACCESS
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-28 md:pt-40">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[12px] md:text- tracking-[0.35em] uppercase text-black/70">
            A NEW ADDRESS FOR YOUR BEST YEARS
          </p>

          <h1 className="mt-8 font-serif text-[44px] md:text-[78px] leading-[1.02] tracking-[0.06em] text-black font-semibold">
            SENIOR LIVING,
            <br />
            REIMAGINED
          </h1>

          <p className="mt-10 text-[15px] md:text-[18px] leading-7 text-black/70 max-w-3xl mx-auto">
            We are crafting a private, design-forward residential community for
            seniors who value independence, calm, and care that feels discreet.
          </p>

          <p className="mt-6 text-[15px] md:text-[18px] leading-7 text-black/70 max-w-3xl mx-auto">
            Real estate that is built to live well in, not just to look good on
            paper. Pre-launch access is limited
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto rounded-full bg-[#3f5a4d] px-10 py-4 text-[13px] tracking-[0.15em] uppercase text-white hover:bg-[#2f463c] transition">
              REQUEST A PRIVATE PREVIEW
            </button>

            <button className="w-full sm:w-auto rounded-full bg-white/70 border border-black/20 px-10 py-4 text-[13px] tracking-[0.15em] uppercase text-black hover:bg-black hover:text-white transition">
              CONTACT US
            </button>
          </div>

          <p className="mt-10 text-[14px] text-black/70">
            No brochures yet. Just early conversations with the right families.
          </p>
        </div>
      </section>

      {/* WALKTHROUGH TITLE SECTION (CENTER IMAGE PART) */}
      <section className="relative z-10 px-6 pt-32 md:pt-52">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-[44px] md:text-3xl font-light tracking-[0.04em]">
            REQUEST A PRIVATE WALKTHROUGH
          </h2>

          <p className="mt-10 text-white/85 text-[15px] md:text-[18px] max-w-4xl mx-auto leading-7">
            Share your details, and we’ll reach out with a discreet pre-launch
            overview. If it feels like the right fit, we’ll arrange a private
            conversation and take it forward personally.
          </p>
        </div>
      </section>

      {/* FORM CARD SECTION */}
      <section className="relative z-10 px-6 pt-14 md:pt-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] bg-[#0b1c1f]/90 border border-white/10 px-8 md:px-14 py-12">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-white/90 text-[18px] mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-[52px] rounded-xl bg-transparent border border-white/20 px-4 text-white outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-white/90 text-[18px] mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full h-[52px] rounded-xl bg-transparent border border-white/20 px-4 text-white outline-none focus:border-white/40"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-white/90 text-[18px] mb-3">
                  One line on what you care about most (independence, calm,
                  community, design)
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl bg-transparent border border-white/20 px-4 py-4 text-white outline-none focus:border-white/40 resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <button className="rounded-full bg-white px-14 py-4 text-[14px] tracking-[0.12em] uppercase text-black hover:bg-white/90 transition">
                  SEND REQUEST
                </button>

                <p className="mt-6 text-white/60 text-sm">
                  We respect your privacy. No spam. No broadcast lists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAY INFORMED SECTION */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-white text-[42px] md:text-[64px] font-light">
            Stay informed about Amaya
          </h3>

          <p className="mt-4 text-white/70 text-[16px] md:text-[18px]">
            Get updates on community events, wellness programs, and new
            developments.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-3xl h-[64px] rounded-full bg-white/20 border border-white/10 px-8 text-white placeholder:text-white/50 outline-none focus:border-white/30"
            />

            <button className="rounded-full bg-white px-20 py-4 text-[14px] tracking-[0.12em] uppercase text-black hover:bg-white/90 transition">
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-6 pb-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white/60 text-xs">
          <p>
            2026 Vera Vita. All rights reserved. Privacy Policy. Terms of
            Service Cookies Settings
          </p>

          <p className="font-serif text-white text-3xl md:text-5xl">Amaya</p>
        </div>
      </footer>
    </main>
  );
}
