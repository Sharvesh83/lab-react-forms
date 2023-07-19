import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !contacts) {
      alert('Please fill in all fields!');
    } else {
        setRegistrationSuccess(true);
    }
  };

  return (
    <div className="container">
      {registrationSuccess && 
        <p className="success">Registration successful!</p>}
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Contacts:
            <textarea
              value={contacts}
              onChange={(e) => setContacts(e.target.value)}
            />
          </label>
          <button type="submit">Register</button>
        </form>
    </div>
  );
};

export default Form;
