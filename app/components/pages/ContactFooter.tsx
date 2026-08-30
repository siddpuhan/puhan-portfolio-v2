import React from "react";

export default function ContactFooter() {
  return (
    <footer className="w-full bg-black text-[#e8e4d9] mt-28 overflow-hidden relative">
      {/* 1. Top Strip & Checkerboard Pattern */}
      <div className="w-full">
        {/* Solid Cream Top Line */}
        <div className="w-full h-1.5 bg-[#e8e4d9]" />
        {/* Repeating Black & Cream Checkerboard Pattern */}
        <div
          className="w-full h-3"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #e8e4d9 0 10px, #000000 10px 20px)`,
          }}
        />
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto md:px-16 px-6 pt-10 pb-8 flex flex-col justify-between">
        {/* Upper Row: Editorial Headline + Decorative Asterisk */}
        <div className="flex items-start justify-between gap-x-4 mb-8">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#e8e4d9] leading-none">
            Let&apos;s talk
          </h2>
          <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e8e4d9] select-none pt-1">
            ✱
          </span>
        </div>

        {/* Bottom Row: Copyright Notice */}
        <div className="border-t border-[#e8e4d9]/10 pt-6 flex items-center justify-between text-xs font-mono text-[#e8e4d9]/60">
          <p>© Siddharth Puhan {new Date().getFullYear()} All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
