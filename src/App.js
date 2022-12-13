import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Myprofile from './components/Myprofile';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './components/app.css';
import Navigation from './components/Navbar/Navbar';
import AddHotelForm from './pages/AddHotel/AddHotelForm';
import AddBookingForm from './pages/AddBooking/AddBookingForm';
import HotelDetails from './pages/HotelDetails/HotelDetails';
import Login from './components/Login';

function NotFound() {
  return <>Page not found</>;
}

function App() {
  return (
    <Router>
      <Navigation className="navigation" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add-hotel" element={<AddHotelForm />} />
          <Route path="/add-booking" element={<AddBookingForm />} />
          <Route path="/details" element={<HotelDetails />} />
          <Route path="*" component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
