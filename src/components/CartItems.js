import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

function CartItems(props) {
  const { name, description, price, id, quantity } = props;
  console.log({ name, description, price, id, quantity });
  return (
    <div>
      <div className="cart-items">
        <div>
          <h2>Sushi</h2>
          <div className="cart-value-quantity">
            <h3>
              { `$${'0.00'}` }
            </h3>
            <h3>
              { `x${'5'}` }
            </h3>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="product-card-increment-button"
            onClick={ () => console.log('olá') }
          >
            <span className="quantity-change-symbol">-</span>
          </button>
          <button
            type="button"
            className="product-card-increment-button"
            onClick={ () => console.log('olá') }
          >
            <span className="quantity-change-symbol">+</span>
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
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CartItems;
