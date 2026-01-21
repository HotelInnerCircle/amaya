"use client";

import Image from "next/image";
import { Button } from "../components/ui/button";
import heroImage from "../../public/assests/hero-seniors.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document
      .getElementById("request-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="AMAYA Banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-12 text-center">
        <p className="text-white/80 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
          A New Address For Your Best Years
        </p>

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-8">
          Senior Living,
          <br />
          Reimagined
        </h1>

        <p className="max-w-xl text-white/75 text-base md:text-lg leading-relaxed mb-4">
          We are crafting a private, design-forward residential community for
          seniors who value independence, calm, and care that feels discreet.
        </p>

        <p className="max-w-lg text-white/70 text-sm md:text-base leading-relaxed mb-10">
          Real estate that is built to live well in, not just to look good on
          paper. Pre-launch access is limited.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button variant="elegant" size="lg" onClick={scrollToForm}>
            Request a Private Preview
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToForm}>
            Contact Us
          </Button>
        </div>

        <p className="text-sm text-white/60 italic">
          No brochures yet. Just early conversations with the right families.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
