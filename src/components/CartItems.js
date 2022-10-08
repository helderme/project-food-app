import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';
import AppContext from '../context/AppContext';

function CartItems(props) {
  const { name, price, id, quantity } = props;
  const { totalAmountSum, cart, setCart, setTotalProducts } = useContext(AppContext);

  const incrementQuantityCart = () => {
    const index = cart.findIndex((product) => product.id === id);
    const newQuantity = cart[index].quantity + 1;
    const newCart = cart;
    newCart[index].quantity = newQuantity;
    setCart(newCart);
    setTotalProducts(newCart);
    totalAmountSum(newCart);
  };

  const decrementQuantityCart = () => {
    const index = cart.findIndex((product) => product.id === id);
    const newQuantity = cart[index].quantity - 1;
    if (newQuantity < 1) {
      const newCart = cart.filter((product) => product.id !== id);
      setCart(newCart);
      setTotalProducts(newCart);
      totalAmountSum(newCart);
    } else {
      const newCart = cart;
      newCart[index].quantity = newQuantity;
      setCart(newCart);
      setTotalProducts(newCart);
      totalAmountSum(newCart);
    }
  };

  return (
    <div>
      <div className="cart-items">
        <div>
          <h2>{name}</h2>
          <div className="cart-value-quantity">
            <h3>
              { `$${price.toFixed(2)}` }
            </h3>
            <h3>
              { `x${quantity}` }
            </h3>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="product-card-increment-button"
            onClick={ decrementQuantityCart }
          >
            <span>-</span>
          </button>
          <button
            type="button"
            className="product-card-increment-button"
            onClick={ incrementQuantityCart }
          >
            <span>+</span>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

CartItems.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CartItems;
