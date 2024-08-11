import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Adjust the path as needed
import { Helmet } from 'react-helmet';

const Account = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:3000/api/users/register', {  // Replace 3000 with your Express port
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username, email, password }),
});


    const data = await response.json();
    console.log(data);

    // Add logic to handle success or errors
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default Account;