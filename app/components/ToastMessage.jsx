'use client';
import React from 'react';

export default function ToastMessage({ toast }) {
  if (!toast.show) return null;

  return (
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
  );
}
