import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = `BKID-${Math.floor(100000 + Math.random() * 900000)}`;
    navigate('/confirmation', { state: { ...form, bookingId } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Booking for Movie ID: {id}</h2>
      <input placeholder="Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Mobile" required type="tel" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
