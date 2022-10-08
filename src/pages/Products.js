import React, { useContext } from 'react';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import dataProducts from '../data/dataProducts';
import AppContext from '../context/AppContext';
import './Products.css';

function Products() {
  const { cart } = useContext(AppContext);
  console.log(cart);
  return (
    <div>
      <Header />
      <div className="products">
        <section className="products-introduction">
          <h1>Quality and tasty food </h1>
          <p>enjoy our week with 20% discount</p>
        </section>
        <section className="products-container">
          {dataProducts.map((item) => ProductsCard(item))}
        </section>
      </div>
    </div>

  );
}

export default Products;
