import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import productData from '../products/productData';
import { AuthState } from '../login/authState';


export function ShippingInfo({ shipping }) {
    if (!shipping) {
        return <div>Loading shipping options...</div>;
    }
    return (
        <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {shipping.options.map(opt => (
                    <li key={opt.id} style={{ marginBottom: '8px' }}>
                        <strong>{opt.label}</strong> — {shipping.currency} {opt.cost.toFixed(2)} ({opt.estDays} days)
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function purchase()  {
    alert('Purchase complete! Thank you for your order.');
    alert("Purchase functionality is not yet implemented.");
    return (null);
}


export function Checkout({ cartItems = [], onToggleCart = () => {}, userName = 'Guest', authState = null }) {
    const items = cartItems.map(id => productData.find(p => p.id === id)).filter(Boolean);

    const [shipping, setShipping] = useState(null);

    useEffect(() => {
        let mounted = true;
        fetch('/api/shipping')
            .then(r => r.json())
            .then(data => { if (mounted) setShipping(data); })
            .catch(() => { if (mounted) setShipping(null); });
        return () => { mounted = false; };
    }, []);

    const total = items.reduce((sum, item) => {
        const price = item.price;
        return sum + price;
    }, 0);


    function getRandomItem(){
        const randomIndex = Math.floor(Math.random() * productData.length);
        return productData[randomIndex];
    }

    // pick a featured random item when the cart is empty
    const randomItem = items.length === 0 ? getRandomItem() : null;

    if (userName === '') {
        userName = 'Guest';
    }

     const isAuthenticated = authState
        ? authState === AuthState.Authenticated
        : (userName && userName !== 'Guest');

    return (
        <main className='container-fluid bg-light text-center'>
                <div>
                <h1>CHECK OUT</h1>
                <h2>Welcome, {userName}!</h2>
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
                            {randomItem && (
                            <div key={randomItem.id} className="product-box">
                                    <img src={randomItem.image} alt={randomItem.name} className="product-img" />
                                    <div>
                                        <h2>{randomItem.name}</h2>
                                        <p>{randomItem.description}</p>
                                    </div>

                                    <div className="product-actions">
                                        <button
                                            onClick={() => onToggleCart(randomItem.id)}
                                            className="btn btn-success btn-sm"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                    <h4 id="checkout-price">{`$${randomItem.price ?? 10}`}</h4>
                                </div>
                            )}
                            

                        </section>
                    ) : (
                        <section className="pay-shipping-box">
                            <div id="price-n-pay-box">
                                <h2 id="total-price">Total Price: ${total}</h2>
                                <button
                                    onClick={() => purchase()}
                                    type="submit"
                                    className={`btn ${isAuthenticated ? 'btn-primary' : 'btn-secondary disabled'} btn-sm`}
                                    disabled={!isAuthenticated}
                                    title={!isAuthenticated ? 'Please log in to complete purchase' : 'Make Purchase'}
                                >
                                    Make Purchase
                                </button>
                                <NavLink to="/products" className="btn btn-secondary btn-sm">Browse Products</NavLink>
                            </div>
                            <div id="shipping-info">
                                <h2>API shipping information</h2>
                                <ShippingInfo shipping={shipping} />
                            </div>
                        </section>
                    )}

        </main>
    );
}