"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-olive/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* === LOGO SECTION === */}
        <a href="/" className="flex items-center gap-3 group">
          {/* ENLARGED LOGO CONTAINER (w-14 h-14) */}
          <div className="relative w-20 h-20">
            <Image 
                src="/logo.png"   // Matches the file in your public folder
                alt="Nature's Patch Logo" 
                fill              // Automatically fills the container
                className="object-contain" 
                priority          // Loads instantly (Crucial for LCP score)
            />
          </div>
          {/* The Text */}
          <span className="font-serif text-2xl font-bold tracking-tight text-moss group-hover:text-cypress transition-colors">
            Nature's Patch<span className="text-cypress">.</span>
          </span>
        </a>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest text-moss">
          <a href="/about" className="hover:text-cypress transition-colors">About</a>
          <a href="/impact" className="hover:text-cypress transition-colors">Impact</a>
          <a href="/projects" className="hover:text-cypress transition-colors">Projects</a>
          <a href="/map" className="hover:text-cypress transition-colors">Map</a>
          <a href="/get-involved" className="bg-moss text-white px-5 py-2.5 rounded-sm hover:bg-cypress transition-all shadow-sm">
            Get Involved
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}
        <button 
          className="md:hidden text-moss p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU DRAWER (Conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden bg-aloe border-t border-olive/20 absolute w-full left-0 shadow-xl h-screen">
          <div className="flex flex-col px-6 py-8 space-y-6 text-sm font-bold uppercase tracking-widest text-moss">
            <a href="/about" onClick={() => setIsOpen(false)} className="border-b border-moss/10 pb-2">About</a>
            <a href="/impact" onClick={() => setIsOpen(false)} className="border-b border-moss/10 pb-2">Impact</a>
            <a href="/projects" onClick={() => setIsOpen(false)} className="border-b border-moss/10 pb-2">Projects</a>
            <a href="/map" onClick={() => setIsOpen(false)} className="border-b border-moss/10 pb-2">Map</a>
            <a href="/lab" onClick={() => setIsOpen(false)} className="border-b border-moss/10 pb-2">The Lab</a>
            <a href="/get-involved" onClick={() => setIsOpen(false)} className="text-cypress pt-2 text-base">→ Get Involved</a>
          </div>
        </div>
      )}
    </nav>
  );
}
