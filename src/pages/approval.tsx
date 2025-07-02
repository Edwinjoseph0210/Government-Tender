import React from 'react';
import { Button } from '../components/ui/button';

const requests = [
  { id: 1, department: 'Health', date: '2024-06-29', status: 'Pending', cost: 12000 },
  { id: 2, department: 'Education', date: '2024-06-28', status: 'Approved', cost: 55000 },
];

export default function Approval() {
  return (
    <main className="min-h-screen bg-background p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6">Approval Workflow</h1>
      {/* Filters */}
      <section className="mb-6 flex flex-wrap gap-4">
        <select className="border rounded px-2 py-1">
          <option>Status: All</option>
          <option>Pending</option>
          <option>Approved</option>
        </select>
        <select className="border rounded px-2 py-1">
          <option>Department: All</option>
          <option>Health</option>
          <option>Education</option>
        </select>
        <input type="date" className="border rounded px-2 py-1" />
      </section>
      {/* Requests Table */}
      <section className="mb-8 bg-white rounded shadow p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th>Request ID</th>
              <th>Department</th>
              <th>Date</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td>{req.id}</td>
                <td>{req.department}</td>
                <td>{req.date}</td>
                <td>
                  <span className={`px-2 py-1 rounded text-xs ${req.status === 'Pending' ? 'bg-primary text-white' : 'bg-accent-light text-accent'}`}>{req.status}</span>
                </td>
                <td>₹{req.cost.toLocaleString()}</td>
                <td>
                  {req.status === 'Pending' && (
                    <div className="flex gap-2">
                      <Button variant="accent">Approve</Button>
                      <Button variant="error">Reject</Button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* Detailed View Placeholder */}
      <section className="bg-white rounded shadow p-6 max-w-xl mx-auto">
        <div className="font-semibold mb-2">Request Details</div>
        <div className="text-gray-500">Select a request to view line items, cost breakdown, and attached specs.</div>
      </section>
    </main>
  );
} 