import React, { useState } from 'react';
import { Button } from '../components/ui/button';

const filters = [
  { label: 'Vendor', type: 'select', options: ['All', 'Vendor A', 'Vendor B'] },
  { label: 'Price Range', type: 'range' },
  { label: 'Warranty', type: 'select', options: ['All', '1 Year', '2 Years'] },
  { label: 'Category', type: 'select', options: ['All', 'Electronics', 'Furniture'] },
];

const products = [
  { id: 1, name: 'Printer', vendor: 'Vendor A', price: '₹12,000', rating: 4.5, warranty: '1 Year', specs: 'High-speed, wireless, duplex' },
  { id: 2, name: 'Laptop', vendor: 'Vendor B', price: '₹55,000', rating: 4.8, warranty: '2 Years', specs: 'i7, 16GB RAM, 512GB SSD' },
];

export default function Catalog() {
  const [modalProduct, setModalProduct] = useState(null as null | typeof products[0]);
  return (
    <main className="min-h-screen bg-background p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      {/* Filters */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {filters.map((filter) => (
          <div key={filter.label}>
            <label className="block mb-1 font-semibold">{filter.label}</label>
            {filter.type === 'select' ? (
              <select className="w-full border rounded px-2 py-1">
                {(filter.options ?? []).map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input type="range" className="w-full" />
            )}
          </div>
        ))}
      </section>
      {/* Product Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow p-4 flex flex-col">
            <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center">Image</div>
            <div className="font-semibold text-lg mb-1">{product.name}</div>
            <div className="text-gray-500 text-sm mb-2">{product.vendor}</div>
            <div className="mb-2">{product.price}</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">★</span>
              <span>{product.rating}</span>
              <span className="ml-auto text-xs bg-accent-light text-accent px-2 py-1 rounded">{product.warranty}</span>
            </div>
            <Button className="mt-auto" onClick={() => setModalProduct(product)}>View Details</Button>
          </div>
        ))}
      </section>
      {/* Modal for Product Details */}
      {modalProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-lg p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-xl" onClick={() => setModalProduct(null)}>&times;</button>
            <h2 className="text-xl font-bold mb-2">{modalProduct.name}</h2>
            <div className="mb-2">Vendor: {modalProduct.vendor}</div>
            <div className="mb-2">Price: {modalProduct.price}</div>
            <div className="mb-2">Warranty: {modalProduct.warranty}</div>
            <div className="mb-2">Specs: {modalProduct.specs}</div>
            <div className="mb-2">Rating: {modalProduct.rating} ★</div>
            <Button onClick={() => setModalProduct(null)} className="mt-4 w-full">Close</Button>
          </div>
        </div>
      )}
      {/* Comparison View Placeholder */}
      <section className="bg-white rounded shadow p-6">
        <div className="font-semibold mb-2">Comparison View</div>
        <div className="text-gray-500">Select products to compare specs, price, ratings, and vendor trust.</div>
      </section>
    </main>
  );
} 