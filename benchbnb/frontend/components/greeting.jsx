import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const guestLinks = () => {
    return (
      <div>
        <Link to="/login">Have any account? Click here to login</Link>
        <br/>
        <Link to="/signup">New to BenchBnB? Signup here</Link>
      </div>
    )
  }

  const userGreeting = () => {
    return (
      <div>
        <h2>Hey there, {currentUser.username}</h2>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  return currentUser ? userGreeting() : guestLinks();
}

export default Greeting;