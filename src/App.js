import './App.css';
import Header from './Header';
import Footer from './Footer';
import Movies from './Movies';
import Home from './Home';
import Contact from './Contact';
import Seating from './Seating';
import Booking from './Booking';
import Payment from './Payment';
import NoMatch from './NoMatch';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
// import ScrollToTop from 'react-router-scroll-top';


function App() {
  return (
        <BrowserRouter>
        {/* <ScrollToTop /> */}
          <Header />
          <Routes>
            <Route path="/"  index element={<Home />}  />
            <Route path="/movies"  element={<Movies />}  />
            <Route path="/contact"  element={<Contact />}  />
            <Route path="/seating"  element={<Seating />}  />
            <Route path="/booking"  element={<Booking />}  />
            <Route path="/payment"  element={<Payment />}  />
            <Route path="*"  element={<NoMatch />}  />
          </Routes>
          <Footer />
        </BrowserRouter> 
 );
}

export default App;
