'use client';
import React, { useState } from 'react';
import AmayaValues from './components/AmayaValues';
import AmayaFooter from './components/AmayaFooter';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success', // success | error
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });

    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Number validation: 10 digits & starts with 6-9
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.number)) {
      showToast(
        'Enter valid 10-digit mobile number starting with 6-9',
        'error'
      );
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(data?.message || 'Something went wrong!', 'error');
        return;
      }

      showToast('Thank you! We will contact you soon.', 'success');
      setFormData({ name: '', number: '', email: '' });
    } catch (error) {
      showToast('Server error. Please try again!', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Toast */}
      {toast.show && (
        <div className='fixed top-6 right-6 z-[9999]'>
          <div
            className={`px-5 py-3 rounded-2xl shadow-xl text-sm font-medium border backdrop-blur-md
            ${
              toast.type === 'success'
                ? 'bg-green-500/15 text-green-200 border-green-500/30'
                : 'bg-red-500/15 text-red-200 border-red-500/30'
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}

      <section className='relative w-full h-[100vh] md:h-screen overflow-hidden'>
        {/* Banner Image */}
        <Image
          src='/assests/mobile_amaya.jpeg'
          alt='Banner'
          fill
          priority
          sizes='100vw'
          className='object-cover object-bottom md:hidden'
        />

        <Image
          src='/assests/medium_copy.webp'
          alt='Banner'
          fill
          priority
          sizes='100vw'
          className='object-cover hidden md:block lg:hidden object-bottom-right'
        />
        <Image
          src='/assests/desktop.jpg'
          alt='Banner'
          fill
          priority
          sizes='100vw'
          className='object-cover object-bottom-right hidden lg:block'
        />

        {/* Overlay */}
        {/* <div className='absolute inset-0 bg-black/40' /> */}

        {/* Navbar */}
        <header className='absolute top-0 left-0 w-full z-20'>
          <div className='max-w-7xl mx-auto px-4 py-6 flex items-center justify-between'>
            <Link href={'/'}>
              <Image
                src='/assests/Amaya_Logo_Final_copy.png'
                alt='AMAYA Logo'
                width={140}
                height={60}
                className='h-auto w-[140px] object-contain'
                priority
              />
            </Link>

            <nav className='hidden md:flex items-center gap-10 text-white/90 text-xl font-medium'>
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
        <div className='relative z-10 h-full flex items-start xl:items-center mt-44 justify-center px-4 text-center'>
          <div className='max-w-4xl'>
            <p className='text-white tracking-widest uppercase mb-4 text-2xl md:text-6xl'>
              Coming Soon
            </p>

            <h1 className='text-white font-semibold leading-[1.05] text-4xl md:text-6xl'>
              The top choice for{' '}
              <span className='text-[#F7D34A]'>luxury living</span>
              <br />
              <span className='text-white'>in Hyderabad</span>
            </h1>

            <p className='mt-5 text-white/80 text-base md:text-lg leading-relaxed'>
              We’re launching something new and exciting. Our website is under
              construction, but we’ll be live very soon. Leave your details
              below and we’ll reach out as soon as we’re ready.
            </p>

            <div className='mt-3'>
              <a
                href='#contact'
                className='inline-flex items-center justify-center px-5 py-2 text-sm sm:px-7 sm:py-3 sm:text-base rounded-full bg-[#F7D34A] text-black font-semibold shadow-lg hover:brightness-95 transition'
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>

      <AmayaValues />

      {/* LEAD FORM SECTION */}
      <section
        id='contact'
        className='relative py-20 overflow-hidden'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/65' />

        <div className='relative z-10 max-w-7xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left text */}
            <div>
              <h2 className='mt-3 text-white text-3xl md:text-5xl font-semibold leading-tight'>
                Sign up for <br className='hidden md:block' /> News Letter
              </h2>

              <p className='text-white/75 mt-4 leading-relaxed max-w-xl'>
                Get first updates on the project launches. Our team will contact
                you shortly.
              </p>

              <div className='mt-10 border-t border-white/15 pt-6 text-white/70 text-sm'></div>
            </div>

            {/* Form card (Glass UI) */}
            <div className='lg:justify-self-end w-full'>
              <div className='w-full max-w-md rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-8'>
                <h3 className='text-2xl font-semibold text-white'>
                  Get Notified First
                </h3>
                <p className='text-white/70 mt-1'>
                  Sign up for newsletter & new launches.
                </p>

                <form onSubmit={handleSubmit} className='mt-7 space-y-4'>
                  <div>
                    <label className='text-sm font-medium text-white/80'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                      required
                      disabled={loading}
                      className='mt-2 w-full px-4 py-3 rounded-2xl border border-white/15 bg-black/30 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#F7D34A] disabled:opacity-60'
                    />
                  </div>

                  <div>
                    <label className='text-sm font-medium text-white/80'>
                      Mobile Number
                    </label>
                    <input
                      type='tel'
                      name='number'
                      value={formData.number}
                      onChange={handleChange}
                      placeholder='Enter your number'
                      required
                      disabled={loading}
                      className='mt-2 w-full px-4 py-3 rounded-2xl border border-white/15 bg-black/30 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#F7D34A] disabled:opacity-60'
                    />
                  </div>

                  <div>
                    <label className='text-sm font-medium text-white/80'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                      required
                      disabled={loading}
                      className='mt-2 w-full px-4 py-3 rounded-2xl border border-white/15 bg-black/30 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#F7D34A] disabled:opacity-60'
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={loading}
                    className='w-full mt-2 px-6 py-3 rounded-full bg-[#F7D34A] text-black font-semibold hover:brightness-95 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed'
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>

                  <p className='text-xs text-white/60 text-center mt-3'>
                    We respect your privacy. No spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AmayaFooter />
    </div>
  );
}
