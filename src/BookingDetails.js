import React from 'react';

function BookingDetails({ selectedSeats, totalPrice, totalBookingFee }) {
//   function formatDate(dateString) {
//     const [year, month, day] = dateString.split('-');
//     return `${day}-${month}-${year}`;
//   }

//   const formattedDate = formatDate(selectedDate);

//   const totalSeats = selectedSeats? selectedSeats.length:0;


  return (
    <div className='confirm'>
        <h3 style={{textAlign:'center'}}>Booking Summary</h3>
        <div className='payment-container'>
            
            <div className='totalprice'><p>{selectedSeats.length} x Ticket </p><p>${totalPrice.toFixed(2)}</p></div>
            <div className='totalprice'><p>{selectedSeats.length} x Booking Fee</p><p>${totalBookingFee.toFixed(2)}</p></div>
            <p>______________________________________</p>
            <div className='totalprice'><p>Total Price: </p><p>${(totalPrice + totalBookingFee).toFixed(2)}</p></div>
</div>
        </div>
  );
}

export default BookingDetails;
