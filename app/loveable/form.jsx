"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    interest: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Mobile validation (10 digits, starts 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.mobile)) {
      showToast("Enter valid 10-digit mobile number starting with 6-9", "error");
      return;
    }

    showToast("Thank you! We'll be in touch soon.", "success");
    setFormData({ fullName: "", mobile: "", interest: "" });
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("hello@amaya.com");
    showToast("Email copied: hello@amaya.com", "success");
  };

  return (
    <section id="request-form" className="bg-white py-24 px-6">
      {/* Toast */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-[9999]">
          <div
            className={`px-5 py-3 rounded-2xl shadow-xl text-sm font-medium border
            ${
              toast.type === "success"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl tracking-[0.15em] uppercase text-gray-900 font-semibold mb-6">
          Request a Private Walkthrough
        </h2>

        <p className="text-gray-600 text-base leading-relaxed mb-12">
          Share your details and we will reach out with a quiet, pre-launch
          overview. If it feels like a fit, we will schedule a private call and
          take it from there.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Full name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="h-12 bg-white border border-gray-300 placeholder:text-gray-400 text-gray-900 rounded-xl focus:ring-2 focus:ring-black/20"
              required
            />

            <Input
              type="tel"
              placeholder="Mobile number"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              className="h-12 bg-white border border-gray-300 placeholder:text-gray-400 text-gray-900 rounded-xl focus:ring-2 focus:ring-black/20"
              required
            />
          </div>

          <Input
            type="text"
            placeholder="One line on what you care about most (independence, calm, community, design)"
            value={formData.interest}
            onChange={(e) =>
              setFormData({ ...formData, interest: e.target.value })
            }
            className="h-12 bg-white border border-gray-300 placeholder:text-gray-400 text-gray-900 rounded-xl focus:ring-2 focus:ring-black/20"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button type="submit" variant="default" size="lg " className='text-[#415148] border-2  border-gray-200 p-2'>
              Send Request
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className='text-[#415148] border-2  border-gray-200'
              onClick={handleCopyEmail}
            >
              Copy Email
            </Button>
          </div>
        </form>

        <p className="mt-10 text-sm text-gray-500">
          We respect your privacy. No spam. No broadcast lists.
        </p>
      </div>
    </section>
  );
};

export default RequestForm;
