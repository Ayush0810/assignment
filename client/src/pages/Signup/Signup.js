import React, { useState} from 'react';
import toast,{Toaster} from 'react-hot-toast';
import {Link, useNavigate} from "react-router-dom"
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate ();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
  
      },
      withCredentials: "include",
      body: JSON.stringify({name, email, password }),
    });
    const json = await response.json();
    // Store the token in a cookie
 
    if(json.success){
      // document.cookie = `token=${json.token}; path=/`;
     
      navigate ('/login', { replace: true });
    }else{
      navigate ('/signup', { replace: true });

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
        <h1>SIGN UP</h1>
        {/* onSubmit={submitHandler} */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              required
              className='input-field'
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Abc"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
            className='color'
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Password</label>
            <input
            className='color'
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*****"
              type="password"
            />
          </div>
        <div>
        <button
          onClick={handleSubmit}
            className="submit-button" 
            type="submit"
          >
           Sign Up
          </button>
           <Toaster/>
        </div>

          <div className="request-course">
            Already have an account!{' '}
            <Link to={"/login"}>
           <a href="/request" className="request-link">
              Click here
            </a>
           </Link>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
