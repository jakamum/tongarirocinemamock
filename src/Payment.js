import {useState} from 'react';
import './Payment.css';
import BookingDetails from './BookingDetails';
import { useLocation } from 'react-router-dom';

// All safety conventions taken to ensure safety and security of customer's financial records and accounts

function Payment() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let selectedSeats = null;
    
    const [selectedPayment, setSelectedPayment] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState('');
    const [showCreditCardDetails, setShowCreditCardDetails] = useState(false);
    const [showGiftCardDetails, setShowGiftCardDetails] = useState(false);
    

    const selectedSeatsParam = searchParams.get('seats');
    if (selectedSeatsParam) {
    selectedSeats = JSON.parse(selectedSeatsParam);
    }

    const price = 10;
    const totalPrice = selectedSeats.length * price;
    const bookingFee = 1.50
    const totalBookingFee = selectedSeats.length * bookingFee;

    let numSelectedSeats = parseInt(selectedSeatsParam, 10); // Parse the query parameter as an integer

        if (!isNaN(numSelectedSeats) && numSelectedSeats > 0) {
        } else {
                 numSelectedSeats = 0;
        }

  // Clear stored data after the booking is confirmed

  localStorage.removeItem('selectedSeats');

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cardHolder: "",
        cardNumber: "",
        expiryDate: "",
        memberName: "",
        memberNumber: "",
        giftExpiry: "",
        acceptedTerms: false
      });
    
      const [submitted, setSubmitted] = useState(false);

      const [validation, setValidation] = useState({
        name: true,
        email: true,
        cardHolder: true,
        cardNumber: true,
        expiryDate: true,
        csv: true,
        acceptedTerms: true,
      });

    //   Establish valid email format
    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    
    
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value,
    });
}

const validateField = (fieldName) => {
    const fieldValue = formData[fieldName];
    
    switch (fieldName) {
      case 'name':
        return !!fieldValue.trim();
      case 'email':
        return isValidEmail(fieldValue);
      case 'acceptedTerms':
        return fieldValue === 'Accept Terms';         
      case 'cardHolder':
        return !!fieldValue.trim();
      case 'cardNumber':
        return /^[0-9]{16}$/.test(fieldValue);
      case 'expiryDate':
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(fieldValue);
      case 'csv':
        return /^[0-9]{3}$/.test(fieldValue);
      case 'memberName':
        return !!fieldValue.trim();
      case 'memberNumber':
        return /^[0-9]{10}$/.test(fieldValue);
      case 'giftExpiry':
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(fieldValue);
        
      default:
        return true;
    }
  };
  
  
    const handleFieldBlur = (fieldName) => {
        const isValid = validateField(fieldName);
        setValidation((prevValidation) => ({
        ...prevValidation,
        [fieldName]: isValid,
        }));
    };


    // All fields validated before submission
    const handleSubmit = (event) => {
      event.preventDefault();
    
      // Check name and email
      const isNameValid = validateField('name');
      const isEmailValid = validateField('email');
    
      if (!isNameValid || !isEmailValid) {
        window.alert('Please enter a valid name and email.');
        return;
      }
    
      // Check accepted terms - safety for customer and company
      if (!acceptedTerms) {
        window.alert('Please accept the terms to continue.');
        return;
      }
    
      // Check Credit Card Details or Gift Card Details
      if (!selectedPayment) {
        window.alert('Please select a payment method (Credit Card or Gift Card).');
        return;
      } else if (selectedPayment === 'Credit Card') {
        const isCardHolderValid = validateField('cardHolder');
        const isCardNumberValid = validateField('cardNumber');
        const isExpiryDateValid = validateField('expiryDate');
        const isCsvValid = validateField('csv');
    
        if (!isCardHolderValid || !isCardNumberValid || !isExpiryDateValid || !isCsvValid) {
          window.alert('Please enter valid credit card details.');
          return;
        }
      } else if (selectedPayment === 'Gift Card') {
        const isMemberNameValid = validateField('memberName');
        const isMemberNumberValid = validateField('memberNumber');
        const isGiftExpiryValid = validateField('giftExpiry');
    
        if (!isMemberNameValid || !isMemberNumberValid || !isGiftExpiryValid) {
          window.alert('Please enter valid gift card details.');
          return;
        }
      }


      // All validations passed, continue with form submission
      setSubmitted(true);
    
      window.alert('Your payment has been confirmed. Enjoy your movie!');
    
      // Clear the form data
      setFormData({
        name: '',
        email: '',
        cardHolder: '',
        cardNumber: '',
        expiryDate: '',
        memberName: '',
        memberNumber: '',
        giftExpiry: '',
        acceptedTerms: false,
      });
    };
    
    //Function to chcck terms are read
    const handleAcceptanceChange = (event) => {
      const isChecked = event.target.checked;
      setAcceptedTerms(isChecked);
    }
    
    
   //Function to determine which payment option selected
      const handlePaymentChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedPayment(selectedOption);
      
        if (selectedOption === 'Credit Card') {
          setShowCreditCardDetails(true);
          setShowGiftCardDetails(false); // Hide Gift Card details when Credit Card is selected
        } else if (selectedOption === 'Gift Card') {
          setShowCreditCardDetails(false); // Hide Credit Card details when Gift Card is selected
          setShowGiftCardDetails(true);
        } else {
          setShowCreditCardDetails(false);
          setShowGiftCardDetails(false);
        }
      };
  
    return (
        <div className="pay-container">
            <div className="pagetitle">
                <div className="stripborder"></div>
                <div className="title"><h1 >PAYMENT DETAILS</h1></div>
                <div className="stripborder"></div>
            </div>
            <div className='summary'>
                <BookingDetails
                selectedSeats={selectedSeats}
                totalPrice={totalPrice}
                totalBookingFee={totalBookingFee}
                />
            </div>
            <div className='details'>
                <h3>1.Your Details</h3>
                <div className='inputs'><input 
                type="text" 
                id="name" 
                name="name" 
                placeholder= "Name" 
                onChange={handleInputChange}></input>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder = "Email" 
                onChange={handleInputChange}></input></div>
            </div>
            
                <h3>2.Terms and Conditions</h3>
                <div className='term-conditions'>                                         
                    <input
                        type="checkbox"
                        id="accept-terms"
                        name="acceptTerms"
                        value="Accept Terms"
                        onChange={handleAcceptanceChange}                      
                    />
                    <label htmlFor="accept-terms">I accept the terms and conditions</label>
                </div>          
            <div className='payment'>
                <div>
                    <h3>3.Payment Method</h3>

                    <div className="payment-form">

                        <form onSubmit={handleSubmit}>
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="creditCard"
                                    name="paymentMethod"
                                    value="Credit Card"
                                    checked={selectedPayment === "Credit Card"}
                                    onChange={handlePaymentChange}
                                    
                                />
                                <label htmlFor="creditCard">Credit Card</label>
                            </div>
                            {showCreditCardDetails && (
                            <div className="credit-card-details">
                                 <div className='credit-fields'>
                                    <label htmlFor="cardHolder">Card Holder </label>
                                    <input 
                                    type="text" 
                                    id="cardHolder" 
                                    name="cardHolder"
                                    onChange={handleInputChange}
                                    onBlur={handleFieldBlur} />
                                </div>
                                <div className='credit-fields'>
                                <label htmlFor="cardNumber">Card Number </label>
                                    <input 
                                    type="text" 
                                    id="cardNumber" 
                                    name="cardNumber"
                                    placeholder = "16 digits" 
                                    onChange={handleInputChange}
                                    onBlur={handleFieldBlur} />
                                </div>
                                <div className='credit-fields'>
                                    <div className='expiry-csv'>
                                        <label htmlFor="expiryDate">Expiry Date </label>
                                        <input 
                                        type="text" 
                                        id="expiryDate" 
                                        name="expiryDate" 
                                        placeholder='MM/YY'
                                        onChange={handleInputChange}
                                        onBlur={handleFieldBlur}/>

                                        <label htmlFor="csv">CSV </label>
                                        <input 
                                        type="text" 
                                        id="csv" 
                                        name="csv" 
                                        placeholder = "3 digits" 
                                        onChange={handleInputChange}
                                        onBlur={handleFieldBlur}/>
                                    </div>
                                </div>
                            </div>
                            )}
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="giftCard"
                                    name="paymentMethod"
                                    value="Gift Card"
                                    checked={selectedPayment === "Gift Card"}
                                    onChange={handlePaymentChange}
                                />
                                <label htmlFor="giftCard">Gift Card</label>
                            </div>
                            {showGiftCardDetails && (
                            <div className="credit-card-details">
                                 <div className='credit-fields'>
                                    <label htmlFor="memberName">Card Holder </label>
                                    <input 
                                    type="text" 
                                    id="memberName"
                                    name="memberName"
                                    onChange={handleInputChange}
                                    onBlur={handleFieldBlur} />
                                </div>
                                <div className='credit-fields'>
                                <label htmlFor="memberNumber">Card Number </label>
                                    <input 
                                    type="text" 
                                    id="memberNumber" 
                                    name="memberNumber"
                                    placeholder = "10 digits" 
                                    onChange={handleInputChange}
                                    onBlur={handleFieldBlur} />
                                </div>
                                <div className='credit-fields'>
                                        <label htmlFor="giftExpiry">Expiry Date </label>
                                        <input 
                                        type="text" 
                                        id="giftExpiry" 
                                        name="giftExpiry" 
                                        placeholder='MM/YY'
                                        onChange={handleInputChange}
                                        onBlur={handleFieldBlur}/>
                                    
                                </div>
                            </div>
                            )}
                            <div><button type="submit" id='pay-button' onClick={handleSubmit}>Complete</button></div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )}

  export default Payment;