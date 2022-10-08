import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import AppContext from '../context/AppContext';

function Header() {
  const THREE_HUNDRED = 300;
  const { cartQuantity, setShowCart } = useContext(AppContext);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, THREE_HUNDRED);
    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);

  return (
    <div className="header">
      <p className="header-title">FoodApp</p>
      <button
        type="button"
        className={ `header-cart-button ${bump ? 'bump' : ''}` }
        onClick={ () => setShowCart(true) }
      >
        <span>Your Cart</span>
        <span className="header-cart-quantity">
          { cartQuantity }
        </span>
      </button>
    </div>
  );
}

export default Header;
