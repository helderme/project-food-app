import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <p className="header-title">FoodApp</p>
      <button type="button" className="header-cart-button">
        <span>Your Cart</span>
        <span className="header-cart-quantity"> 0 </span>
      </button>
    </div>
  );
}

export default Header;
