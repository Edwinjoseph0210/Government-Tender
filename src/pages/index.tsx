import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4 text-center">
        <img src="/assets/images/gov-logo.svg" alt="Gov Logo" className="mx-auto mb-6 w-20" />
        <h1 className="text-4xl font-bold mb-4">Government Procurement Platform</h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Empowering departments to compare, approve, and procure with trust and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login"><Button variant="primary">Login as Admin</Button></Link>
          <Link href="/login"><Button variant="primary">Login as Department</Button></Link>
          <Link href="/login"><Button variant="primary">Login as Vendor</Button></Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {['Compare', 'Approve', 'Track', 'Procure'].map((benefit) => (
          <div key={benefit} className="bg-white rounded shadow p-6 text-center">
            <div className="mb-4 h-12 w-12 mx-auto bg-accent-light rounded-full flex items-center justify-center">
              {/* Icon placeholder */}
              <span className="text-accent text-2xl font-bold">{benefit[0]}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
            <p className="text-gray-500">Short description of {benefit.toLowerCase()} feature.</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-primary">12,000+</div>
          <div className="text-gray-600">Orders Completed</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary">1,500+</div>
          <div className="text-gray-600">Vendors Onboarded</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary">300+</div>
          <div className="text-gray-600">Departments Served</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">What Departments Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded shadow p-6">
              <p className="text-gray-700 italic mb-4">"This platform made procurement seamless and transparent!"</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div>
                  <div className="font-semibold">Department {i}</div>
                  <div className="text-gray-500 text-sm">Govt. of State</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 