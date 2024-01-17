import { useLocation, useNavigate } from 'react-router-dom';

import "./Booking.css";
import Gran from "./images/GranTurismo.jpg";
import Oppen from "./images/Oppen.png";
import Meg from "./images/Meg2.jpg";
import Elemental from "./images/Elemental.png";
import Blue from "./images/BlueBeetle.png";
import Spider from "./images/SpiderMan.png";
import Shetty from "./images/MissShetty.png";
import Cats from "./images/Cats.png";
import Greek from "./images/Greek.png";
import SlamDunk from "./images/SlamDunk.png";


import BookingDetails from './BookingDetails';

function Booking(){

    const availableMovies = [
        { title: "Gran Turismo: Based on a True Story",imageUrl: Gran},
        { title: "Oppenheimer", imageUrl: Oppen},
        { title: "Meg 2: The Trench", imageUrl: Meg },
        { title: "Elemental", imageUrl: Elemental },
        { title: "Blue Beetle", imageUrl: Blue},
        { title: "Spider-Man: Across the Spider-Verse", imageUrl: Spider},
        { title: "Miss Shetty Mr Polishetty", imageUrl: Shetty},
        { title: "Cats in the Museum", imageUrl: Cats},
        { title: "My Big Fat Wedding 3", imageUrl: Greek},
        { title: "The First Slam Dunk", imageUrl: SlamDunk},
        
    ];
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
   

    // Set an initial value for selectedMovie
    let selectedMovie = null;
    let selectedSeats = null;

    // Retrieve route parameters
    const selectedMovieTitle = searchParams.get('movie');
    const selectedDate = searchParams.get('date');
    const selectedTime = searchParams.get('time');
    const selectedSeatsParam = searchParams.get('seats');
    if (selectedSeatsParam) {
        selectedSeats = JSON.parse(selectedSeatsParam);
        }
    // const selectedSeats = JSON.parse(searchParams.get('seats'));
    const price = 10;
    const totalPrice = selectedSeats.length * price;
    const bookingFee = 1.50
    const totalBookingFee = selectedSeats.length * bookingFee;
    

  // Example code to display the selected movie and seat information
 

  selectedMovie = availableMovies.find(movie => movie.title === selectedMovieTitle);


  // You can update your initialBookingData with these values if needed

  // Clear stored data after the booking is confirmed
  localStorage.removeItem('selectedMovie');
  localStorage.removeItem('selectedSeats');

  if (selectedSeats) {
    // Safely access the length property
    const totalSeats = selectedSeats.length;
    // Use totalSeats as needed
  } else {
    // Handle the case where selectedSeats is null or undefined
    // For example, you can display an error message or provide a default value
    const totalSeats = 0; // Set a default value
  }

const handleCheckout = () => {
    const isConfirmed = window.confirm("Proceeding to payment page. Do you want to continue?");

    if (isConfirmed) {
        navigate(`/payment?seats=${JSON.stringify(selectedSeats)}`);
      }
  }



  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  }
  
  const formattedDate = formatDate(selectedDate);
  const navigate = useNavigate();
  if (!selectedMovie || !selectedDate || !selectedTime) {
    // Handle the case where parameters are missing or invalid
    // Display an error message or navigate back to a previous page
    return (
      <div className="error-message">
        Missing or invalid parameters. Please check your URL.
      </div>
    );
  }
  


  return (
      <div id="book-movies">
        <div className="pagetitle">
          <div className="stripborder"></div>
          <div className="title"><h1 >BOOKING DETAILS</h1></div>
          <div className="stripborder"></div>
        </div>
        <div className="booking-form">
                     
            <div className="booking-details">
                <div id="movie-img"><img src={selectedMovie ? selectedMovie.imageUrl : "default-image-url.jpg"}  alt="Selected Movie" />          
                </div>   
                <div id="booking">
                  <form id="booking-form">
                  <h2>{selectedMovie ? selectedMovie.title : "No Movie Selected"}</h2>
                  <label htmlFor="movie">Movie:</label>
                  <p id="movie" name="movie">
                      {selectedMovie ? selectedMovie.title : "No Movie Selected"}
                      </p>
                  <label htmlFor="date">Date:</label>
                  <p id="date" name="date">
                      {formattedDate? formattedDate: "No Date Selected"}
                      </p>
                      <label htmlFor="time">Showtime:</label>
                  <p id="time" name="time">
                      {selectedTime ? selectedTime : "No Time Selected"}PM
                      </p>
                  <label htmlFor="seats">Seats:</label>
                  <p id="seats" name="seats">
                      {selectedSeats ? selectedSeats.join(', ') : "No Seats Selected"}
                      </p>
                  <label htmlFor="tickets">Number of Tickets:</label>
                  <p id="tickets" name="tickets">
                      {selectedSeats ? selectedSeats.length : "No Seats Selected"}
                  </p>
                  </form>
                  
              </div>
                <div className='confirm'>
                    <BookingDetails
                    selectedMovie={selectedMovie}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    selectedSeats={selectedSeats}
                    totalPrice={totalPrice}
                    totalBookingFee={totalBookingFee}
                />
                <div className='button-container'>
                <button
                type="submit"
                className="confirm-button"
                onClick={handleCheckout}   
            >
                Confirm Booking
                    </button>
                </div></div>
            </div>
        </div>
    </div>

                
        )
    }
    
export default Booking;