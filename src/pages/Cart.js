import React, { useContext } from 'react';
import './Cart.css';
import AppContext from '../context/AppContext';
import CartItems from '../components/CartItems';

function Cart() {
  const { showCart, setShowCart, cart } = useContext(AppContext);
  return (
    <div className={ showCart ? 'cart' : 'hide-cart' }>
      <div className="cart-background" />
      <div className="cart-container">
        <div>
          {cart.map((product) => CartItems(product))}
        </div>
        <div className="cart-total-amount">
          <h2>Total Amount</h2>
          <h2>$0.00</h2>
        </div>
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
