import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const errors = {};
    if (!firstName) {
      errors.firstName = 'Please enter your first name!';
    }
    if (!lastName) {
      errors.lastName = 'Please enter your last name!';
    }
    if (!email) {
      errors.email = 'Please enter your email!';
    }
    if (!contacts) {
      errors.contacts = 'Please enter your contacts!';
    }

    // Display errors if any, else set registration success
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setRegistrationSuccess(true);
    }
  };

  return (
    <div className="container">
      {registrationSuccess && (
        <p className="success">Registration successful!</p>
      )}
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>
        <label>
          Contacts:
          <textarea
            value={contacts}
            onChange={(e) => setContacts(e.target.value)}
          />
          {errors.contacts && (
            <p className="error">{errors.contacts}</p>
          )}
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
