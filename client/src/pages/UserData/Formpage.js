import React, { useState} from 'react';
import './Formpage.css';
import { useNavigate } from 'react-router-dom';

const Formpage = () => {
  const [contactname, setContactname] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [pincode, setPincode] = useState('');
  const [website, setWebsite] = useState('');
  const [transaction, setTransaction] = useState('');

  const navigate = useNavigate ();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Send cookies with the request
      body: JSON.stringify({ contactname, mobile,location,pincode,website,transaction }),
    });
    const json = await response.json();
    console.log(json);
  
    // Check the response from the server
    if(json.success){
      navigate ('/me', { replace: true });
    }
  };
  

  return (
    <div className="container">
      <div className="contact-form">
        <h2>Merchant Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Contact Name</label>
            <input
            className='color'
              required
              id="email"
              value={contactname}
              onChange={(e) => setContactname(e.target.value)}
              placeholder="ABC"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mobile</label>
            <input
            className='color'
              required
              id="email"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+91**********"
              type="number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Location</label>
            <textarea
              required
              id="message"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Your Address...."
            ></textarea>
          </div>
          {/* disabled={loading} */}
          <div className="form-group">
            <label htmlFor="">Pincode</label>
            <input
            className='color'
              required
              id="email"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="12345"
              type="number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Website Url</label>
            <input
            className='color'
              required
              id="email"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://www.abc.com"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Average Transaction</label>
            <input
            className='color'
              required
              id="email"
              value={transaction}
              onChange={(e) => setTransaction(e.target.value)}
              placeholder="Rs...."
              type="number"
            />
          </div>
          <button
            className="submit-button"
            type="submit"
          >
            Submit
          </button>       
        </form>
      </div>
    </div>
  );
};

export default Formpage;
