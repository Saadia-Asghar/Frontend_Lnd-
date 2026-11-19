import React, { useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudentSplashBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand bg-brand-light rounded-full hover:bg-brand hover:text-white transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Show Campus Intro Banner</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl sm:rounded-4xl bg-brand text-white shadow-blueBanner overflow-hidden mb-10 transition-all duration-300">
      
      {/* Close button (exact (X) circle from Dribbble shot) */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        title="Dismiss banner"
        className="absolute top-5 left-5 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-xs"
      >
        <X className="w-4 h-4 stroke-[2.5]" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 sm:p-10 lg:p-12 relative z-10 gap-8">
        
        {/* Left / Center Illustration */}
        <div className="md:col-span-5 flex justify-center order-2 md:order-1">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
            
            {/* Background subtle arc */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 240" fill="none">
              <circle cx="120" cy="120" r="105" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 40 160 A 90 90 0 0 1 200 160" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            </svg>

            {/* Floating geometric items (matching Dribbble art) */}
            <div className="absolute top-4 right-12 w-6 h-7 bg-[#FFB5A7] rounded-sm transform rotate-12 shadow-sm flex items-center justify-center">
              <div className="w-3 h-0.5 bg-white/80 rounded-full mb-1"></div>
            </div>
            <div className="absolute top-10 left-10 w-4 h-4 bg-[#FF7D59] rounded-sm transform -rotate-45"></div>
            <div className="absolute top-14 right-6 w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div className="absolute top-24 left-6 w-2.5 h-2.5 bg-[#FFD6CE] rounded-full"></div>

            {/* Stylized Walking Student SVG (True to Dribbble aesthetic) */}
            <svg
              viewBox="0 0 200 220"
              className="w-full h-full drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Back foot */}
              <path
                d="M 52 170 L 40 185 C 38 188 42 195 48 195 L 68 190 Z"
                fill="#151A3A"
                stroke="#151A3A"
                strokeWidth="2"
              />
              <path
                d="M 85 130 L 60 172"
                stroke="#FFFFFF"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 85 130 L 60 172"
                stroke="#151A3A"
                strokeWidth="1.5"
              />

              {/* Front Leg (stepping forward) */}
              <path
                d="M 105 135 L 126 175 C 128 182 135 186 142 186 L 158 185 C 163 185 165 180 160 178 L 138 172"
                fill="#151A3A"
              />
              <path
                d="M 98 128 L 122 170"
                stroke="#FFFFFF"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 98 128 L 122 170"
                stroke="#151A3A"
                strokeWidth="1.5"
              />

              {/* Shorts */}
              <path
                d="M 75 110 L 115 110 L 125 135 L 105 136 L 95 125 L 82 138 L 68 135 Z"
                fill="#FFFFFF"
                stroke="#151A3A"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Backpack (Salmon Pink matching shot) */}
              <rect
                x="52"
                y="65"
                width="28"
                height="45"
                rx="8"
                fill="#FFB1A0"
                stroke="#151A3A"
                strokeWidth="2"
              />
              <path
                d="M 56 68 C 56 60 74 60 74 68"
                stroke="#151A3A"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 52 85 C 52 105 60 115 75 112"
                stroke="#151A3A"
                strokeWidth="2"
                fill="none"
              />

              {/* Body / Shirt (Dark Navy) */}
              <path
                d="M 78 72 C 85 68 102 70 112 75 L 108 112 L 76 110 Z"
                fill="#151A3A"
                stroke="#151A3A"
                strokeWidth="2"
              />

              {/* Arm & Hands */}
              <path
                d="M 98 82 C 112 90 128 92 145 78"
                stroke="#FFFFFF"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 98 82 C 112 90 128 92 145 78"
                stroke="#151A3A"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Head & Neck */}
              <path d="M 96 68 L 96 58 L 104 58 L 104 68 Z" fill="#FFFFFF" />
              <circle
                cx="106"
                cy="48"
                r="14"
                fill="#FFFFFF"
                stroke="#151A3A"
                strokeWidth="2"
              />
              {/* Hair */}
              <path
                d="M 94 48 C 94 36 106 34 116 38 C 118 42 118 46 114 47 C 108 47 100 45 96 49 Z"
                fill="#151A3A"
              />
              {/* Smile / Eye */}
              <circle cx="109" cy="46" r="1.5" fill="#151A3A" />
              <path d="M 110 52 C 108 55 105 54 103 52" stroke="#151A3A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

          </div>
        </div>

        {/* Right / Text & Action (Help Students - You Never Know What You'll Find) */}
        <div className="md:col-span-7 space-y-4 order-1 md:order-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Student Marketplace</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Help Students
          </h2>

          <p className="text-base sm:text-lg text-white/90 font-medium tracking-wide">
            You Never Know What You'll Find
          </p>

          <p className="text-sm text-white/80 max-w-lg leading-relaxed pt-1">
            Exchange textbooks, dorm essentials, tech, and campus clothing directly with classmates on campus. Fast handoffs, zero delivery fees.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              to="/sell"
              className="px-8 py-3.5 bg-white text-brand hover:bg-slate-50 text-base font-bold rounded-full shadow-lg transition-transform duration-200 active:scale-95"
            >
              Start Now
            </Link>

            <a
              href="#recent-items"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold rounded-full backdrop-blur-xs transition-colors"
            >
              <span>Explore Items</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
