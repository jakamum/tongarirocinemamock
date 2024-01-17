import React, { useState } from 'react';
import './Contact.css';

// Initialise empty variables
function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
//   Establish valid email format
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.username) {
      window.alert("Please enter your name.");
      return;
    }

    if (!formData.email) {
      window.alert("Please enter your email address.");
      return;
    }
    if (!formData.message) {
        window.alert("Please enter your message.");
        return;
      }

    // Valid email check
    if (!isValidEmail(formData.email)) {
      window.alert("Please enter a valid email address.");
      return;
    }

    // Send the form data to your backend or perform other actions here

    // Set submitted flag to true
    setSubmitted(true);

    // Display a success message
    window.alert("Your details have been sent!");

    // Optionally, you can clear the form data after submission
    setFormData({
      username: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{ marginTop: '0' }}>
      <div className="pagetitle">
        <div className="stripborder"></div>
        <div className="title"><h1>CONTACT US</h1></div>
        <div className="stripborder"></div>
      </div>
      <div className="ContactForm">
        <form id="Contactform" onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Name'
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              type='text'
              id='message'
              name='message'
              placeholder='Message'
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button type='submit' id='submitbtn' onClick={handleSubmit}>Submit</button>

        </form>
      </div>
      {submitted && (
        <p>Your details have been sent!</p>
      )}
    </div>
  );
}

export default Contact;
