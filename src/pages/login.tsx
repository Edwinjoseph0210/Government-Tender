import React, { useState } from 'react';

const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Department User', value: 'department' },
  { label: 'Vendor', value: 'vendor' },
];

export default function Login() {
  const [role, setRole] = useState('admin');

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white rounded shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/assets/images/gov-logo.svg" alt="Gov Logo" className="w-16" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <div className="flex justify-center gap-2 mb-6">
          {roles.map((r) => (
            <button
              key={r.value}
              className={`px-4 py-2 rounded font-semibold border ${role === r.value ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}
              onClick={() => setRole(r.value)}
            >
              {r.label}
            </button>
          ))}
        </div>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
          <button type="submit" className="w-full bg-accent text-white py-2 rounded font-semibold">Login</button>
        </form>
        <div className="mt-6 text-center text-gray-400 text-sm">
          <div className="mb-2">Government badge/logo here</div>
          <div className="opacity-50">Aadhaar / e-sign (Coming Soon)</div>
        </div>
      </div>
    </main>
  );
} 