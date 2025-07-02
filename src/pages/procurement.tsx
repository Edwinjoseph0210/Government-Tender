import React from 'react';

const cartItems = [
  { id: 1, name: 'Printer', price: 12000, qty: 2 },
  { id: 2, name: 'Laptop', price: 55000, qty: 1 },
];

export default function Procurement() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const budget = 2000000;
  const used = 1200000;
  const remaining = budget - used - total;

  return (
    <main className="min-h-screen bg-background p-6">
      <h1 className="text-2xl font-bold mb-6">Procurement Request</h1>
      {/* Cart-like Experience */}
      <section className="mb-8 bg-white rounded shadow p-6">
        <div className="font-semibold mb-4">Selected Products</div>
        <table className="w-full mb-4">
          <thead>
            <tr className="text-left text-gray-500">
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>₹{item.price.toLocaleString()}</td>
                <td>₹{(item.price * item.qty).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right font-bold">Total: ₹{total.toLocaleString()}</div>
      </section>
      {/* Confirm Step & Approval Form */}
      <section className="mb-8 bg-white rounded shadow p-6">
        <div className="font-semibold mb-4">Approval Form</div>
        <div className="mb-4">Auto-generated approval form for selected products.</div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Select Approver</label>
          <select className="w-full border rounded px-2 py-1">
            <option>Approver 1</option>
            <option>Approver 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Digital Signature</label>
          <div className="w-full h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">Signature Placeholder</div>
        </div>
        <button className="bg-accent text-white px-6 py-2 rounded font-semibold">Submit for Approval</button>
      </section>
      {/* Live Budget Tracker */}
      <section className="bg-white rounded shadow p-6 max-w-md mx-auto">
        <div className="font-semibold mb-2">Live Budget Tracker</div>
        <div className="mb-2">Budget: ₹{budget.toLocaleString()}</div>
        <div className="mb-2">Used: ₹{used.toLocaleString()}</div>
        <div className="mb-2">This Request: ₹{total.toLocaleString()}</div>
        <div className={`mb-2 ${remaining < 0 ? 'text-red-500' : 'text-green-600'}`}>Remaining: ₹{remaining.toLocaleString()}</div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-3 bg-accent" style={{ width: `${((used + total) / budget) * 100}%` }} />
        </div>
      </section>
    </main>
  );
} 