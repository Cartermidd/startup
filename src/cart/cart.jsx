import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function Cart({ cartItems, onToggleCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);


  const renderCart = () => {
    if (cartItems.length === 0) {
      return (
        <div>
          <p>Your cart is empty.</p>
          <NavLink to="/products" className="btn btn-primary">Browse Products</NavLink>
        </div>
      );
    }

    return cartItems.map(productId => {
      const product = products.find(p => (p.id) === productId);
      if (!product) return null;
      
      return (
        <div key={product.id} className="product-box">
          <img src={product.image} alt={product.name} className="product-img" />
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <button
            onClick={() => onToggleCart(product.id)}
            className="btn btn-danger btn-bg"
          >
            <img src="/shopping-cart.png" width="25" alt="Cart Icon" />
          </button>
        </div>
      );
    });
  };


    return (
      <main className='container-fluid bg-light text-center'>
        <h1>Your Cart</h1>
        <div id="cart-items-container">
          {renderCart()}
        </div>
        <hr />
      </main>
    );
}