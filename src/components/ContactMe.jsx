import './ContactMe.css';
import React from 'react';
import ContactForm from '../stories/Contactform';

function ContactMe() {

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="form min-h-[calc(100vh-50px)] pt-16 kufam">
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  )
}



export default ContactMe
