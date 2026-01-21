'use client'

import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      setSuccess(true)
      e.target.reset()
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      
      {/* HERO */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center px-6"
        style={{
          backgroundImage:
            "url('/assests/amaya.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-3xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Amaya — Coming Soon
          </h1>
          <p className="text-xl mb-2">A Life on Your Terms.</p>
          <p className="text-sm opacity-90 mb-8">
            We’re launching something thoughtful and meaningful.  
            Leave your details and we’ll be in touch soon.
          </p>

          <a
            href="#lead"
            className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-100 transition"
          >
            Notify Me
          </a>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead" className="py-16 px-6">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Get Updates on Amaya
          </h2>

          {success && (
            <p className="mb-4 text-green-600 text-center">
              Thanks! We’ll reach out soon.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input required name="name" placeholder="Full Name" className="input" />
            <input required name="mobile" placeholder="Mobile Number" className="input" />
            <input required type="email" name="email" placeholder="Email Address" className="input" />

            <select name="interest" className="input">
              <option>Interested In</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>Investment</option>
              <option>Site Visit</option>
            </select>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required />
              <span>I agree to receive updates from Amaya.</span>
            </label>

            <button
              disabled={loading}
              className="w-full bg-neutral-900 text-white py-3 rounded-full hover:bg-neutral-800 transition"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-neutral-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center">
          {[
            'Life on Your Terms',
            'Well-Being First',
            'Community & Belonging',
            'Trust & Dignity',
            'Thoughtful Design',
          ].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-neutral-600">
        <p>📞 [PLACEHOLDER_PHONE] · ✉️ [PLACEHOLDER_EMAIL]</p>
        <p className="mt-2">© Amaya by Vera Vita · <a href="#">Privacy Policy</a></p>
      </footer>
    </main>
  )
}
