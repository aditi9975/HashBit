import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';  // Make sure Home is in the pages folder
import MovieDetails from './Pages/MovieDetails';  // Correct path for MovieDetails
import BookingForm from './Pages/BookingForm';  // Correct path for BookingForm
import Confirmation from './Pages/Confirmation';  // Correct path for Confirmation

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
