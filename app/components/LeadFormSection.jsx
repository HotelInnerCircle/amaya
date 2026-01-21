'use client';
import React from 'react';

export default function LeadFormSection({
  formData,
  loading,
  handleChange,
  handleSubmit,
}) {
  return (
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

          {/* Form card */}
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
  );
}
