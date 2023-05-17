import React, { useEffect, useState } from "react";
import "./Userprofile.css";

const Userprofile = () => {
  const [userData, setUserData] = useState(null);
  const [userd, setUserd] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
 
        const response = await fetch("http://localhost:4000/api/v1/merchant", {
          method: "GET",
          credentials: "include", // Send cookies with the request
        });
    
        if (response.ok) {
          const data = await response.json();
  
          if (data.success === true) {
            setUserData(data.user[0]);
          } 
      } 
    };
    const fetchData2 = async () => {
        const response = await fetch("http://localhost:4000/api/v1/me", {
          method: "GET",
          credentials: "include", // Send cookies with the request
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data.user)
          if (data.success === true) {
            setUserd(data.user);
          } 
    };
  }
  fetchData2();
    fetchData();
  }, []);

  return (
    <div>
      <h1>PROFILE</h1>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-info">
            <div className="profilename">
              <h2 className="profile-name">Name :</h2>
              {userd && <h2>{userd.name}</h2>}
            </div>
            <div className="profileemail">
              <h2 className="profile-email">Email :</h2>
              {userd && <h2>{userd.email}</h2>}
            </div>
          </div>
        </div>
      </div>

      <div className="profiledata">
        <h1>Your Data</h1>
        <div className="data">
          {userData ? (
            <>
              <div className="maindata">
                <h3 className="hero">Contact Name:</h3>
                <p>{userData.contactname}</p>
              </div>
              <div className="maindata">
                <h3>Location:</h3>
                <p>{userData.location}</p>
              </div>
              <div className="maindata">
                <h3>Pincode:</h3>
                <p>{userData.pincode}</p>
              </div>
              <div className="maindata">
                <h3>Mobile:</h3>
                <p>{userData.mobile}</p>
              </div>
              <div className="maindata">
                <h3>Website(URL):</h3>
                {userData.website && <p>{userData.website[0]}</p>}
              </div>
              <div className="maindata">
                <h3>Average Transaction(in Rs):</h3>
                <p>{userData.transaction}</p>
              </div>
            </>
          ) : (
            <h1>
            <a href="/register">Click here</a> to register yourself ...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
