"use client";

import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const validatenumber = (value) => {
    const digits = value.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(digits);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!formData.fullName.trim()) {
      setMsg("❌ Please enter your full name");
      return;
    }

    if (!validatenumber(formData.number)) {
      setMsg("❌ Enter valid 10-digit mobile number (starts with 6-9)");
      return;
    }

    if (!formData.note.trim()) {
      setMsg("❌ Please enter your message");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          number: formData.number.replace(/\D/g, ""),
          message: formData.note,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data?.message || "❌ Something went wrong");
        return;
      }

      setMsg("✅ Submitted successfully!");
      setFormData({ fullName: "", number: "", note: "" });
    } catch (error) {
      setMsg("❌ Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 px-6 pt-10 md:pt-20 pb-24" id="form">
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-[#0b1c1f]/90 border border-white/10 px-6 md:px-14 py-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-white/90 text-[16px] mb-2">
                Full Name
              </label>
              <input
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                type="text"
                className="w-full h-[52px] rounded-xl bg-transparent border border-white/20 px-4 text-white outline-none focus:border-white/40"
              />
            </div>

            {/* number */}
            <div>
              <label className="block text-white/90 text-[16px] mb-2">
                Phone Number
              </label>
              <input
                value={formData.number}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, "");
                  if (onlyDigits.length <= 10) {
                    setFormData({ ...formData, number: onlyDigits });
                  }
                }}
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="10 digit number"
                className="w-full h-[52px] rounded-xl bg-transparent border border-white/20 px-4 text-white outline-none focus:border-white/40"
              />
            </div>

            {/* Note */}
            <div className="md:col-span-2">
              <label className="block text-white/90 text-[16px] mb-2">
                One line on what you care about most
              </label>
              <textarea
                value={formData.note}
                onChange={(e) =>
                  setFormData({ ...formData, note: e.target.value })
                }

                className="w-full rounded-xl bg-transparent border border-white/20 px-4 py-4 text-white outline-none focus:border-white/40 resize-none"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2 flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-white px-10 py-3 text-[13px] uppercase text-black hover:bg-[#3D473E] hover:text-white transition disabled:opacity-60"
              >
                {loading ? "SENDING..." : "SEND REQUEST"}
              </button>

              {msg && (
                <p className="text-center text-sm text-white/80">{msg}</p>
              )}
            </div>

            <p className="md:col-span-2 text-white/60 text-sm text-center">
              We respect your privacy. No spam. No broadcast lists.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
