import React from 'react';
import { Button } from '../components/ui/button';

const products = [
  { id: 1, name: 'Printer', status: 'Active' },
  { id: 2, name: 'Laptop', status: 'Inactive' },
];
const orders = [
  { id: 1, product: 'Printer', status: 'Shipped', feedback: '4.5/5' },
  { id: 2, product: 'Laptop', status: 'Pending', feedback: '-' },
];

export default function Vendor() {
  return (
    <main className="min-h-screen bg-background p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6">Vendor Portal</h1>
      {/* Product Management */}
      <section className="mb-8 bg-white rounded shadow p-6">
        <div className="font-semibold mb-4">Your Products</div>
        <table className="w-full mb-4">
          <thead>
            <tr className="text-left text-gray-500">
              <th>Product</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t">
                <td>{p.name}</td>
                <td>{p.status}</td>
                <td>
                  <Button className="mr-2">Edit</Button>
                  <Button variant="error">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="accent">Add Product</Button>
      </section>
      {/* Order Tracking */}
      <section className="mb-8 bg-white rounded shadow p-6">
        <div className="font-semibold mb-4">Order Tracking</div>
        <table className="w-full mb-4">
          <thead>
            <tr className="text-left text-gray-500">
              <th>Order ID</th>
              <th>Product</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t">
                <td>{o.id}</td>
                <td>{o.product}</td>
                <td>{o.status}</td>
                <td>{o.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* KYC/Document Upload */}
      <section className="bg-white rounded shadow p-6 max-w-md mx-auto">
        <div className="font-semibold mb-2">KYC / Document Upload</div>
        <input type="file" className="mb-4" />
        <div className="text-gray-500 mb-2">Upload your documents for vendor approval.</div>
        <Button>Upload</Button>
      </section>
    </main>
  );
} 