import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Seating.css';


function Seating() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const selectedMovie = searchParams.get('movie');
  const selectedDate = searchParams.get('date');
  const selectedTime = searchParams.get('time');
  console.log('Received Movie:', selectedMovie);
  console.log('Received Date:', selectedDate);
  console.log('Received Time:', selectedTime);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const seatPrice = 10; // Set seat price here

  const numRows = 9;
  const numSeatsPerRow = 16;
  const maxReservedSeats = 5;

  useEffect(() => {
    const numReservedSeats = Math.min(maxReservedSeats, Math.floor(Math.random() * (numRows * numSeatsPerRow)));
    const newReservedSeats = [];
    while (newReservedSeats.length < numReservedSeats) {
      const randomRow = Math.floor(Math.random() * numRows) + 1;
      const randomSeat = Math.floor(Math.random() * numSeatsPerRow) + 1;
      const seatNumber = `${randomRow}-${randomSeat}`;
      if (!newReservedSeats.includes(seatNumber)) {
        newReservedSeats.push(seatNumber);
      }
    }
    setReservedSeats(newReservedSeats);
  }, []);

  const handleSeatClick = (row, seat) => {
    const seatNumber = `${row}-${seat}`;
   
    if (!reservedSeats.includes(seatNumber)) {
      // If the seat is not reserved, toggle its selection status
      if (selectedSeats.includes(seatNumber)) {
        // If the seat is already selected by the user, unselect it
        setSelectedSeats(selectedSeats.filter((selected) => selected !== seatNumber));
      } else {
        // If the seat is not selected, select it
        setSelectedSeats([...selectedSeats, seatNumber]);
      }
      
    }
  };

    const handleCheckout = () => {
      if ((selectedSeats.length === 0)) {
        // Display an alert message for date selection error
        window.alert("Please select a seat.");
        return; // Stop execution since date is not selected
      }
  
      else{
        // Create an object to store selected data
        const bookingData = {
          movie: selectedMovie,
          date: selectedDate,
          time: selectedTime,
          seats: selectedSeats,
        };
      
        // Store bookingData in local storage as a JSON string
        localStorage.setItem('bookingData', JSON.stringify(bookingData));


        // Check if the user confirms the checkout
        const isConfirmed = window.confirm("Proceeding to checkout with selected seats. Do you want to continue?");

        // If the user confirms, navigate to the booking page
        if (isConfirmed) {
          navigate(`/booking?movie=${selectedMovie}&date=${selectedDate}&time=${selectedTime}&seats=${JSON.stringify(selectedSeats)}`);
        }
      }  
    };
  
  const renderSeats = () => {
    const seats = [];
    const wheelchairSeats = ["9-2", "9-3", "9-14", "9-15"]

    for (let seat = 1; seat <= numSeatsPerRow; seat++) {
        const columnSeats = [];
        

      for (let row = 1; row <= numRows; row++) {
        const seatNumber = `${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatNumber);
        const isReserved = reservedSeats.includes(seatNumber);
        const isWheelchairAccessible = wheelchairSeats.includes(seatNumber);

        const seatClasses = `seat ${isSelected ? 'selected' : ''} ${isReserved ? 'reserved' : ''} ${
            isWheelchairAccessible ? 'wheelchair' : ''
          }`;

        columnSeats.push(
          <div
            key={seatNumber}
            className={seatClasses}
            onClick={() => handleSeatClick(row, seat)}
          >

          </div>
        );
      }
      seats.push(
        <div key={`column-${seat}`} className="column">
          {columnSeats}
        </div>
      );
    }
    return seats;
  };

  const rowLabels = Array.from({ length: numRows }, (_, i) => String.fromCharCode(65 + i));

  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div style={{ marginTop: '0' }}>
      <div className="pagetitle">
        <div className="stripborder"></div>
        <div className="title">
          <h1>SEATING PLAN</h1>
        </div>
        <div className="stripborder"></div>
      </div>

      <div className='seat-key'>
        <div className='seat'></div><p>Available</p>
        <div className='seat' id='user-select'></div><p>Your seat(s)</p>
        <div className='seat' id='reserved'></div><p>Reserved</p>
        <div className='seat' id='wheelchair'></div><p>Wheelchair</p>
      </div>
      <div className='seating-title'>
        <p>FRONT OF CINEMA</p>
      </div>
      <div id="cinema">
        <div className="row-labels">
          {rowLabels.map((label, index) => (
            <div key={`row-label-${index}`} className="row-label">
              {label}
            </div>
          ))}
        </div>
        {renderSeats()}
      </div>
      <div className='checkout'>
        <button id="nextbtn" onClick={handleCheckout}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Seating;