import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6">Department Dashboard</h1>
      {/* Budget Status */}
      <section className="mb-8">
        <div className="bg-white rounded shadow p-6 flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold mb-2">Budget Status</div>
            <div className="text-3xl font-bold text-primary">₹ 12,00,000 / 20,00,000</div>
            <div className="text-gray-500 text-sm">Used / Total</div>
          </div>
          <div className="w-40">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-3 bg-accent" style={{ width: '60%' }} />
            </div>
            <div className="text-right text-xs text-gray-400 mt-1">60% used</div>
          </div>
        </div>
      </section>
      {/* Quick Access */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/catalog"><Button className="w-full py-4 text-lg">Browse Products</Button></Link>
        <Link href="/catalog"><Button className="w-full py-4 text-lg">Compare</Button></Link>
        <Link href="/procurement"><Button className="w-full py-4 text-lg">Procurement History</Button></Link>
      </section>
      {/* Recent Orders & Pending Approvals */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded shadow p-6">
          <div className="font-semibold mb-4">Recent Orders</div>
          <ul className="space-y-2">
            {[1,2,3].map((i) => (
              <li key={i} className="flex justify-between items-center">
                <span>Order #{1000+i}</span>
                <span className="text-xs bg-accent-light text-accent px-2 py-1 rounded">Shipped</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded shadow p-6">
          <div className="font-semibold mb-4">Pending Approvals</div>
          <ul className="space-y-2">
            {[1,2].map((i) => (
              <li key={i} className="flex justify-between items-center">
                <span>Request #{2000+i}</span>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded">Pending</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Notifications */}
      <section className="max-w-md mx-auto">
        <div className="bg-white rounded shadow p-4 flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-accent-light flex items-center justify-center text-accent text-xl font-bold">N</div>
          <div>
            <div className="font-semibold">Notifications</div>
            <div className="text-gray-500 text-sm">Requests approved, orders shipped, etc.</div>
          </div>
        </div>
      </section>
    </main>
  );
} 