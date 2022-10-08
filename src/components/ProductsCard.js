import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductsCard.css';
import AppContext from '../context/AppContext';

function ProductsCard(props) {
  const { name, description, price, img, id } = props;
  const {
    cart,
    setCart,
    setTotalProducts,
    totalAmountSum,
  } = useContext(AppContext);
  const [quantity, setquantity] = useState(0);
  const NEGATIVE_ONE = -1;

  const incrementQuantity = () => setquantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 0) setquantity(quantity - 1);
  };

  const addToCart = () => {
    const index = cart.findIndex((product) => product.id === id);
    if (index === NEGATIVE_ONE && quantity > 0) {
      const newCart = ([...cart, { ...props, quantity }]);
      setCart(newCart);
      setTotalProducts(newCart);
      totalAmountSum(newCart);
    }
    if (index !== NEGATIVE_ONE && quantity > 0) {
      const newQuantity = cart[index].quantity + quantity;
      const newCart = cart;
      newCart[index].quantity = newQuantity;
      setCart(newCart);
      setTotalProducts(newCart);
      totalAmountSum(newCart);
    }
  };

  return (
    <div className="product-card">
      <h2 className="product-card-title">{name}</h2>
      <img
        className="product-card-image"
        src={ img }
        alt={ name }
      />
      <p>{description}</p>
      <h3>{`$${price.toFixed(2)}`}</h3>
      <div>
        <button
          type="button"
          className="product-card-increment-button"
          onClick={ decrementQuantity }
        >
          -
        </button>
        <span className="product-card-quantity">{` ${quantity} `}</span>
        <button
          type="button"
          className="product-card-increment-button"
          onClick={ incrementQuantity }
        >
          +
        </button>
        <button
          type="button"
          className="product-card-add-button"
          onClick={ addToCart }
          disabled={ quantity === 0 }
        >
          Add
        </button>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductsCard;
