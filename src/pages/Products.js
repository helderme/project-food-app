import React from 'react';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import dataProducts from '../data/dataProducts';
import './Products.css';
import Footer from '../components/Footer';

function Products() {
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
      <Footer />
    </div>
  );
}

export default Products;
