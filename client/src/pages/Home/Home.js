import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <>
   
    <section className="home">
      <div className="container">
        <div className="content-container">
          <div className="text-container">
            <h1 className="heading">WELCOME TO <span className='import'>RESTAURANT</span></h1>
            <p className="sub-heading">
              Your Best Restaurant Partner
            </p>
              <button className="explore-button">Explore Now</button>
          </div>
          <div className="image-container">
           <div className="wrapper">
            <div className="box">
            </div>
           </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
