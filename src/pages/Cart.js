import React, { useContext } from 'react';
import './Cart.css';
import AppContext from '../context/AppContext';

function Cart() {
  const { showCart, setShowCart } = useContext(AppContext);
  return (
    <div className={ showCart ? 'cart' : 'hide-cart' }>
      <div className="cart-background" />
      <div className="cart-container">
        <div>
          <button type="button" onClick={ () => setShowCart(false) }>
            close
          </button>
          <button type="button">
            order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
