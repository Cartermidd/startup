import React from 'react';
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
                <h1>CHECK OUT</h1>

                <h2>Welcome, [username]!</h2>

                <section className="checkout-items">
                    {items.length === 0 ? (
                        <div>
                            <p>Your cart is empty.</p>
                            <a className="btn btn-primary" href="/products">Browse Products</a>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="product-box">
                                <img src={item.image} alt={item.name} className="product-img" />
                                <div className="product-details">
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className="product-actions">
                                    <button
                                        onClick={() => onToggleCart(item.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </section>

                <div id="price-n-pay-box">
                    <h2>Total Price: ${total}</h2>
                    <button type="submit" className="btn btn-primary btn-sm">Purchase</button>
                </div>

                <div id="shipping-info">
                    <h2>API shipping information</h2>
                    <img width="200px" src="" alt="Some sort of shipping display" />
                </div>
        </main>
    );
}