import React from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/catalog', label: 'Catalog' },
  { href: '/procurement', label: 'Procurement' },
  { href: '/approval', label: 'Approval' },
  { href: '/vendor', label: 'Vendor' },
];

export default function Navbar() {
  return (
    <>
      {/* Topbar for desktop */}
      <nav className="hidden md:flex items-center justify-between bg-primary text-white px-8 py-4 shadow">
        <div className="flex items-center gap-4">
          <img src="/assets/images/gov-logo.svg" alt="Gov Logo" className="w-10 h-10" />
          <span className="font-bold text-xl">GovProcure</span>
        </div>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      {/* Bottombar for mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex md:hidden justify-around py-2 shadow">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="flex flex-col items-center text-xs text-primary">
            {/* Icon placeholder */}
            <span className="mb-1">⬤</span>
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
} 