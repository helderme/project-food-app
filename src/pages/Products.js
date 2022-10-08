import React from 'react';
import ProductsCard from '../components/ProductsCard';
import dataProducts from '../data/dataProducts';

function Products() {
  return (
    <div>
      {dataProducts.map((item) => ProductsCard(item))}
    </div>
  );
}

export default Products;
