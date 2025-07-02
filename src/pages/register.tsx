import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/button';

const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Department User', value: 'department' },
  { label: 'Vendor', value: 'vendor' },
];

export default function Register() {
  const [role, setRole] = useState('admin');
  const router = useRouter();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (role === 'vendor') router.push('/vendor');
    else if (role === 'admin') router.push('/approval');
    else router.push('/dashboard');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background pb-20">
      <div className="bg-white rounded shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/assets/images/gov-logo.svg" alt="Gov Logo" className="w-16" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <div className="flex justify-center gap-2 mb-6">
          {roles.map((r) => (
            <button
              key={r.value}
              className={`px-4 py-2 rounded font-semibold border ${role === r.value ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}
              onClick={() => setRole(r.value)}
              type="button"
            >
              {r.label}
            </button>
          ))}
        </div>
        <form className="space-y-4" onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
          <Button type="submit" className="w-full">Register</Button>
        </form>
        <div className="mt-6 text-center text-gray-400 text-sm">
          <div className="mb-2">Government badge/logo here</div>
          <div className="opacity-50">Aadhaar / e-sign (Coming Soon)</div>
        </div>
      </div>
    </main>
  );
} 