import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductsCard.css';

function ProductsCard(props) {
  const { name, description, price, img } = props;
  const [quantity, setquantity] = useState(0);

  const incrementQuantity = () => setquantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 0) setquantity(quantity - 1);
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
        <button type="button" className="product-card-add-button">
          Add
        </button>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductsCard;
