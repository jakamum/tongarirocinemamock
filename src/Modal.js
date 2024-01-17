import React, { useState } from 'react';

function Modal({ isOpen, onClose, onSelectDateTime,}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleContinueClick = () => {
    // Check if selectedDate is null or undefined (not selected)
    if (!selectedDate) {
      // Display an alert message for date selection error
      window.alert("Please select a date.");
      return; // Stop execution since date is not selected
    }
  
    // Check if selectedTime is not one of the valid choices
    if (!["12:00 PM", "3:00 PM", "7:00 PM"].includes(selectedTime)) {
      // Display an alert message for time selection error
      window.alert("Please select a valid time (12:00 PM, 3:00 PM, or 7:00 PM).");
    } else {
      // Both date and time are selected, proceed with further action
      onSelectDateTime(selectedDate, selectedTime);
    }
  };
  
  

  if (!isOpen) return null;

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className='select-title'>Select Date and Time</h2>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={currentDate}
          />
        </div>
        <div>
      <label htmlFor="time">Time:</label>
        <select
          type="time"
          id="time"
          value={selectedTime}
          onChange={handleTimeChange}
          
        >
          <option value="Choose a Time">Choose a Time</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
        </select>
    </div>
        <button onClick={handleContinueClick} style={{marginTop: '1rem', fontSize: 'medium', padding: '.5rem', border: '1px solid var(--white)'}}>Continue to Seating</button>
      </div>
    </div>
  );
}

export default Modal;
