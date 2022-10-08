import React from 'react';
import PropTypes from 'prop-types';

function ProductsCard(props) {
  const { name, description, price, img } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <img src={ img } alt={ name } />
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
