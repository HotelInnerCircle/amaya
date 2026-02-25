'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaLock, FaUserAlt, FaSignInAlt, FaBuilding } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RealEstateLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        '/api/admin/login',
        { email, password },
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success('Welcome back 👋');
        router.push('/admin/dashboard');
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f766e]">
      
      {/* Ambient light */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full" />
      </div>

      {/* Left Image */}
      <div className="relative hidden w-1/2 md:flex">
        <Image
          src="/assests/hero-seniors.jpg"
          alt="Luxury Real Estate"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col justify-end p-16 text-white">
          <h1 className="text-4xl font-bold leading-tight">
            Manage Properties <br /> With Confidence
          </h1>
          <p className="mt-4 text-sm text-gray-300 max-w-md">
            Access your real estate dashboard to manage listings, leads,
            bookings and analytics in one place.
          </p>
        </div>
      </div>

      {/* Right Login Card */}
      <div className="relative z-10 flex items-center justify-center w-full md:w-1/2 p-6 md:p-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl text-white"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-emerald-600 rounded-2xl shadow-lg">
                <FaBuilding size={28} />
              </div>
            </div>

            <h2 className="text-2xl font-semibold">Admin Login</h2>
            <p className="text-sm text-gray-300 mt-2">
              Sign in to your Real Estate Dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaUserAlt className="absolute left-4 top-3.5 text-gray-300" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-3 pl-12 pr-4 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-3.5 text-gray-300" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-3 pl-12 pr-4 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 py-3 rounded-full font-semibold transition ${
                loading
                  ? 'bg-emerald-700/40 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700'
              }`}
            >
              <FaSignInAlt />
              {loading ? 'Signing in...' : 'Login'}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-10 text-xs text-center text-gray-400">
            © {new Date().getFullYear()} Your Realty Group <br />
            Powered by{' '}
            <Link
              href="https://www.broaddcast.com"
              target="_blank"
              className="text-emerald-400 hover:underline"
            >
              Broaddcast Digital
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
