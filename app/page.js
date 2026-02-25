import Image from 'next/image';
import React from 'react';
import Form from './components/forms/Form';
import Newsletter from './components/forms/Newsletter';

export default function Page() {
  return (
    <main className='relative min-h-screen w-full  '>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10 mb-240 md:mb-100 xl:-mb-90 sm:mb-260 lg:mb-30 2xl:-mb-140'>
        <Image
          src='/assests/ias-2.jpg' // must be inside public/
          alt='Background'
          fill
          priority
          className='object-contain object-cover md:object-bottom xl:object-bottom 2xl:object-cover lg:object-bottom  '
        />

        {/* Optional overlay */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>

      {/* Header */}
      <header className='absolute top-0 left-0 right-0 z-50 px-6 md:px-16 py-4'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto'>
          <Image
            src='/assests/Amaya_Logo_Final.png'
            alt='Amaya Logo'
            width={160}
            height={60}
            priority
            className='h-auto w-[120px] md:w-[160px] object-contain'
          />
          <div className='flex items-center'>
            <span className='text-[8px] font-bold font-stretch-50%'>
              A Project By
            </span>
            <Image
              src='/assests/Vera_Vita_Black.svg'
              alt='Amaya Logo'
              width={160}
              height={30}
              priority
              className='h-auto w-[100px] md:w-[140px] object-contain'
            />
          </div>
          {/* <button className='rounded-full border border-black/30 bg-white/60 px-6 py-2 text-[10px]  uppercase text-black hover:bg-black hover:text-white transition'>
            PRE-LAUNCH ACCESS
          </button> */}
        </nav>
      </header>

      {/* Page Content */}
      <section className='relative z-10 pt-30 text-center text-black max-w-5xl mx-auto p-8 '>
        <p className='text-xs font-bold'>A NEW ADDRESS FOR YOUR BEST YEARS</p>
        <h1 className='mt-4 font-serif text-2xl md:text-[38px] leading-[1.02] tracking-[0.06em] text-black font-semibold'>
          SENIOR LIVING,
          <br />
          REIMAGINED
        </h1>
        <p className=' text-[10px] md:text-[18px]  text-black/70 max-w-3xl mx-auto pl-8 pr-8 p-3 md:pl-12 md:pr-12'>
          We are crafting a private, design-forward residential community for
          seniors who value independence, calm, and care that feels discreet.
        </p>

        <p className=' text-[10px] md:text-[18px]  text-black/70 max-w-3xl mx-auto pl-8 pr-8 md:pl-12 md:pr-12'>
          Real estate that is built to live well in, not just to look good on
          paper. Pre-launch access is limited.
        </p>
        <div className=' mt-2 flex flex-col sm:flex-row items-center justify-center gap-3'>
          {/* <a
            href="#form"
            className="p-8 sm:w-auto rounded-full bg-[#3f5a4d] py-2 text-[12px] uppercase text-white hover:bg-[#2f463c] transition"
          >
            REQUEST A PRIVATE PREVIEW
          </a> */}
                    <a href="#form" className='p-8 sm:w-auto rounded-full bg-[#3f5a4d]  py-2 text-[12px]  uppercase text-white hover:bg-[#2f463c] transition'>
            REQUEST A PRIVATE PREVIEW
          </a>

          {/* <button className="md:px-20 sm:w-auto hover:bg-[#3D473E] rounded-full bg-white/70 border border-black/20 px-3 py-2 text-[13px] tracking-[0.15em] uppercase text-black  hover:text-white transition">
            CONTACT US
          </button> */}
        </div>

        <p className='mt-2 text-[10px] text-black/70 p-2.5'>
          No brochures yet. Just early conversations with the right families.
        </p>
      </section>

      <section className='relative z-10 px-6 pt-32 md:pt-52 2xl:mt-52'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-white text-[24px] md:text-[32px] font-light tracking-[0.04em]'>
            REQUEST A PRIVATE WALKTHROUGH
          </h2>

          <p className='mt-2 text-white/85 pl-9 pr-9 md:pl-20 md:pr-20 text-[8px] md:text-[14px] max-w-4xl mx-auto '>
            Share your details, and we’ll reach out with a discreet pre-launch
            overview. If it feels like the right fit, we’ll arrange a private
            conversation and take it forward personally.
          </p>
        </div>
      </section>
      <Form />
      <Newsletter />
      <footer className='relative z-10 pb-5 bg-[#19262C]'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6'>
          <Image
            src='/assests/Amaya_Logo_Final_copy.png'
            alt='Amaya Logo'
            width={180}
            height={70}
            className='h-auto w-[120px] md:w-[180px] object-contain'
            priority
          />

          {/* Footer Text */}
          <p className='text-center md:text-left text-white/60 text-[10px] md:text-xs max-w-md'>
            2026 Vera Vita. All rights reserved. Privacy Policy. Terms of
            Service Cookies Settings
          </p>
        </div>
      </footer>
    </main>
  );
}
