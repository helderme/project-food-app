import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import ApiContext from './AppContext';

function ApiProvider(props) {
  const { children } = props;

  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const setTotalProducts = (newCart) => {
    const sum = newCart.reduce(
      (previousValue, product) => previousValue + product.quantity,
      0,
    );
    if (typeof sum === 'number') {
      setCartQuantity(sum);
    }
  };

  const totalAmountSum = (newCart) => {
    const sum = newCart.reduce(
      (previousValue, product) => previousValue + (product.price * product.quantity),
      0,
    );
    if (typeof sum === 'number') {
      setTotalAmount(sum);
    }
  };

  const providerValue = useMemo(() => ({
    cart,
    setCart,
    cartQuantity,
    setTotalProducts,
    showCart,
    setShowCart,
    totalAmount,
    totalAmountSum,
  }), [cart, cartQuantity, showCart, totalAmount]);

  return (
    <ApiContext.Provider value={ providerValue }>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
