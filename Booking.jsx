import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Conference",
    city: "",
    date: "",
    guests: "",
    budget: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section id="events" className="w-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold">Book Your Event</h2>
          <p className="text-sm text-gray-600">Share your event details to get a quick quote and planning support.</p>
        </div>
        <form onSubmit={onSubmit} className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm">Full Name</label>
            <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm">Phone</label>
            <input name="phone" value={form.phone} onChange={onChange} className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm">Event Type</label>
            <select name="type" value={form.type} onChange={onChange} className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Conference</option>
              <option>Product Launch</option>
              <option>Wedding</option>
              <option>Festival</option>
              <option>Private Party</option>
              <option>Other</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm">City</label>
            <input name="city" value={form.city} onChange={onChange} className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm">Event Date</label>
            <input type="date" name="date" value={form.date} onChange={onChange} className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm">Guests</label>
            <input type="number" min="1" name="guests" value={form.guests} onChange={onChange} className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm">Estimated Budget</label>
            <input name="budget" value={form.budget} onChange={onChange} placeholder="e.g. 200000" className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm">Notes</label>
            <textarea name="notes" value={form.notes} onChange={onChange} rows={4} className="w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <div className={`text-sm ${submitted ? "text-green-700" : "text-transparent"}`}>Request submitted</div>
            <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 active:bg-indigo-800">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
