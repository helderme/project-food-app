import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import ApiContext from './AppContext';

function ApiProvider(props) {
  const { children } = props;

  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const providerValue = useMemo(() => ({
    cart,
    setCart,
    cartQuantity,
    setCartQuantity,
  }), [cart, cartQuantity]);

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
