import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const { state } = useLocation();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> {state.bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
};

export default Confirmation;
