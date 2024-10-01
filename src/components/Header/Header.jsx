import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2 style={{ color: "aqua" }}>Get your best <br /><span>book here</span></h2>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: "1.2vw",
          lineHeight: "1.6",
          color: "#f0f0f0",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
          margin: "0"
        }}>
          Explore a wide range of books across various genres, curated to satisfy your literary cravings.
        </p>
        {/* Corrected input element */}
          <input type="text" placeholder='Search your best book' />
      </div>
    
    </div>
  );
}

export default Header;
