'use client';
import Image from 'next/image';
import React from 'react';

const AmayaFooter = () => {
  return (
    <footer className="bg-[#0b0f14] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          {/* Brand */}
          <div className="flex items-center">
            <div className="relative w-[220px] h-[80px] md:w-[260px] md:h-[90px]">
              <Image
                src="/assests/Amaya_Logo_Final_copy.png"
                alt="AMAYA Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white/90 uppercase">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white/90 uppercase">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <span className="text-white/50">Phone:</span>{' '}
                <a
                  href="tel:+919000123123"
                  className="hover:text-white transition"
                >
                  +91 9000123123
                </a>
              </li>

              <li>
                <span className="text-white/50">Email:</span>{' '}
                <a
                  href="mailto:sales@amaya.com"
                  className="hover:text-white transition"
                >
                 sales@amaya.com
                </a>
              </li>

              <li>
                <span className="text-white/50">Location:</span> Munirabad, Medchal Malkajgiri,Telangana
              </li>
            </ul>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              {['Instagram', 'Facebook', 'LinkedIn'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white/90 uppercase">
              Newsletter
            </h3>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Subscribe to receive launch updates and exclusive offers.
            </p>

            <form className="mt-5 flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#F7D34A]"
              />
              <button
                type="submit"
                className="rounded-2xl px-5 py-3 bg-[#F7D34A] text-black font-semibold text-sm hover:brightness-95 transition"
              >
                Join
              </button>
            </form>

            <p className="mt-3 text-xs text-white/50">
              We respect your privacy. No spam.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} AMAYA. All Rights Reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AmayaFooter;
