'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='relative w-full overflow-hidden h-screen md:h-screen'>
      {/* Desktop Banner */}
      <div className='hidden md:block absolute inset-0'>
        <Image
          src='/assests/amaya.jpeg'
          alt='Amaya Desktop Banner'
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
      </div>

      {/* Mobile Banner */}
      <div className='block md:hidden absolute inset-0'>
        <Image
          src='/assests/mobile_amaya.jpeg'
          alt='Amaya Mobile Banner'
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Navbar */}
      <header className='absolute top-0 left-0 w-full z-20'>
        <div className='max-w-7xl mx-auto px-4 py-5 flex items-center justify-between'>
          <Link href='/'>
            <Image
              src='/assests/Amaya_Logo_Final_copy.png'
              alt='AMAYA Logo'
              width={160}
              height={70}
              className='h-12 md:h-14 w-auto object-contain'
              priority
            />
          </Link>

          <nav className='hidden md:flex items-center gap-10 text-white/90 text-lg font-medium'>
            <a href='#home' className='hover:text-white transition'>
              Home
            </a>
            <a href='#Services' className='hover:text-white transition'>
              Services
            </a>
            <a href='#Projects' className='hover:text-white transition'>
              Projects
            </a>
            <a href='#contact' className='hover:text-white transition'>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className='relative z-10 h-full flex items-end md:items-center justify-center px-4 pb-12 md:pb-0'>
        <div className='max-w-4xl text-center'>
          <p className='text-white tracking-widest uppercase mb-3 md:mb-4 text-3xl md:text-6xl font-semibold'>
            Coming Soon
          </p>

          <h1 className='text-white font-semibold leading-tight text-3xl md:text-6xl'>
            The top choice for{' '}
            <span className='text-[#F7D34A]'>luxury living</span>
            <br className='hidden md:block' />
            <span className='text-white'>in Hyderabad</span>
          </h1>

          <p className='mt-4 md:mt-5 text-white/80 text-sm md:text-lg leading-relaxed'>
            We’re launching something new and exciting. Our website is under
            construction, but we’ll be live very soon. Leave your details below
            and we’ll reach out as soon as we’re ready.
          </p>

          <div className='mt-6 md:mt-8 flex justify-center'>
            <a
              href='#contact'
              className='inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#F7D34A] text-black font-semibold shadow-lg hover:brightness-95 transition'
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
