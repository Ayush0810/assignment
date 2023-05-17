import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch( "http://localhost:4000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Send cookies with the request
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    // Check the response from the server
    
    if (json.success === true) {
      setEmail('');
      setPassword('');
      navigate('/me', { replace: true });
    } else {
      // Handle login failure if needed
     
      navigate("/login")
    }
    if(json.success!== true){
      toast.error("log in failed",{
          duration:2000
      })
    }
   
  };

  return (
    <div className="container">
      <div className="contact-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="color"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="color"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              type="password"
            />
          </div>
          <div>
          <button onClick={handleSubmit} className="submit-button" type="submit">
            Login
          </button>
          <Toaster /> 
          </div>
         
        </form>
        <div className="request-course">
          Don't have an account!{' '}
          <Link to="/signup" className="request-link">
            Click here
          </Link>
        </div>
     {/* Place the Toaster component here */}
      </div>
    </div>
  );
};

export default Login;
