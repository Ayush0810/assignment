import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login status
  console.log(document.cookie);

  const handleLogout = async () => {
    try {
      // Send a logout request to the backend API
      const response = await fetch("http://localhost:4000/api/v1/logout", {
        method: "POST",
        credentials: "include", // Send cookies with the request
      });

      if (response.ok) {
        // Logout successful, update the login status
        setIsLoggedIn(false);
      } else {
        // Handle logout error
        // You can display an error message or perform any necessary actions
      }
    } catch (error) {
      // Handle fetch error
      // You can display an error message or perform any necessary actions
    }
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">Restaurant</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        {isLoggedIn ? (
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">SignUp</a>
          </>
        )}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
