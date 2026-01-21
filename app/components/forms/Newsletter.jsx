"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!email.trim()) {
      setMsg("❌ Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      setMsg("❌ Please enter a valid email");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data?.message || "❌ Something went wrong");
        return;
      }

      setMsg("✅ Email submitted successfully!");
      setEmail("");
    } catch (err) {
      setMsg("❌ Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 px-6 pb-20">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-white text-[22px] sm:text-[28px] md:text-[44px] font-light">
          Stay informed about Amaya
        </h3>

        <p className="mt-4 text-white/70 text-[12px] md:text-[18px]">
          Get updates on community events, wellness programs, and new
          developments.
        </p>

        <form
          onSubmit={handleNewsletter}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-2xl h-[58px] rounded-full bg-white/20 border border-white/10 px-8 text-white placeholder:text-white/50 outline-none focus:border-white/30"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-white px-16 py-3 text-[13px] uppercase text-black hover:bg-[#3D473E] hover:text-white transition disabled:opacity-60"
          >
            {loading ? "SUBMITTING..." : "SUBMIT"}
          </button>

          {msg && <p className="text-white/80 text-sm">{msg}</p>}
        </form>
      </div>
    </section>
  );
}
