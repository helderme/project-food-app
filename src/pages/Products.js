import React from 'react';
import ProductsCard from '../components/ProductsCard';
import dataProducts from '../data/dataProducts';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <section className="products-introduction">
        <h1>Quality and tasty food </h1>
        <p>enjoy our week with 20% discount</p>
      </section>
      <section className="products-container">
        {dataProducts.map((item) => ProductsCard(item))}
      </section>
    </div>
  );
}

export default Products;
