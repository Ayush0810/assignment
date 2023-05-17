import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>About</h1>
          <span className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus voluptates error laudantium maiores similique illum doloremque quasi! Nostrum, nulla!</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            Restaurant
          </span>
          <span className="copyright">
          Copyright 2023.All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer