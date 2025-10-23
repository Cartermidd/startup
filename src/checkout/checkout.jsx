import React from 'react';
import { NavLink } from 'react-router-dom';
import productData from '../products/productData';


export function Checkout({ cartItems = [], onToggleCart = () => {} }) {
    const items = cartItems.map(id => productData.find(p => p.id === id)).filter(Boolean);

    const total = items.reduce((sum, item) => {
        // productData currently doesn't include price; assume $10 each as placeholder
        const price = item.price ?? 10;
        return sum + price;
    }, 0);

    return (
        <main className='container-fluid bg-light text-center'>
                <div>
                <h1>CHECK OUT</h1>
                <h2>Welcome, [username]!</h2>
                </div>
                <section className="checkout-items">
                    {items.length === 0 ? (
                        <div>
                            <p>Your cart is empty.</p>
                            <NavLink className="btn btn-primary" to="/products">Browse Products</NavLink>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="product-box">
                                <img src={item.image} alt={item.name} className="product-img" />
                                <h2>{item.name}</h2>
                                
                                <div className="product-actions">
                                    <button
                                        onClick={() => onToggleCart(item.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <h4 id="checkout-price">${item.price}</h4>
                            </div>
                        ))
                    )}

                    </section>

                    {items.length === 0 ? (
                        <section className="featured-item-box">
                            <h3>Check out this featured item!</h3>
                        </section>
                    ) : (
                        <section className="pay-shipping-box">
                            <div id="price-n-pay-box">
                                <h2 id="total-price">Total Price: ${total}</h2>
                                <button type="submit" className="btn btn-primary btn-sm">Make Purchase</button>
                                <NavLink to="/products" className="btn btn-secondary btn-sm">Browse Products</NavLink>
                            </div>
                            <div id="shipping-info">
                                <h2>API shipping information</h2>
                                <img width="200px" src="" alt="Some sort of shipping display" />
                            </div>
                        </section>
                    )}

        </main>
    );
}