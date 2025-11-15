
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Products } from './products/products';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { AuthState } from './login/authState';


export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = useState(currentAuthState);

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  function handleAuthChange(username, newAuthState) {
    setUserName(username);
    setAuthState(newAuthState);

    if (newAuthState === AuthState.Authenticated) {
      localStorage.setItem('userName', username);
    } else {
      localStorage.removeItem('userName');
    }
  }

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch {
      console.error('Error saving cart to localStorage');
    }
  }, [cartItems]);

  const handleToggleCart = (productId) => {
    setCartItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <BrowserRouter>
      <div className="app bg-light text-dark">
        <header className="container-fluid bg-info">
          <nav className="navbar" id="login_n_logo">
            <div id="logo">
              <NavLink to="/">
                <img
                  width="175px"
                  src="/rockcanyon_design.png"
                  alt="Rock Canyon Design"
                />
              </NavLink>
            </div>
            <div className="login-container">
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={handleAuthChange}
              />
            </div>
          </nav>

          <br />

          <nav>
            <ul className="pagination">
              <li className="page-item">
                <NavLink className="page-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="page-item">
                <NavLink className="page-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="page-item">
                <NavLink className="page-link" to="/cart">
                  Cart
                </NavLink>
              </li>
              <li className="page-item">
                {authState === AuthState.Authenticated ? (
                  <NavLink className="page-link" to="/checkout">
                    Check Out
                  </NavLink>
                ) : (
                  <NavLink className="page-link" to="/login">
                    Login
                  </NavLink>
                )}
              </li>
              {userName === 'admin' && (
                <li className="page-item">
                  <NavLink className="page-link" to="/admin">
                    ADMIN PAGE
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products cartItems={cartItems} onToggleCart={handleToggleCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onToggleCart={handleToggleCart} />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                onToggleCart={handleToggleCart}
                userName={userName}
                authState={authState}
              />
            }
          />

          <Route
            path="/login"
            element={
              <DisplayLogin
                userName={userName}
                authState={authState}
                onAuthChange={handleAuthChange}
                onToggleCart={handleToggleCart}
                cartItems={cartItems}
              />
            }
          />

          <Route
            path="/admin"
            element={authState === AuthState.Authenticated && userName === 'admin'
              ?<Admin authState={authState}/>
              : <NotFound />
            }
          />
      
          <Route path="*" element={<NotFound />} />

        </Routes>

        <footer>
          <span id="sillyfootertext" className="text-reset">
            Site designed by{' '}
          </span>
          <a id="sillyfootertextname" href="https://github.com/Cartermidd">
            Carter Middleton
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}


function DisplayLogin({ userName, authState, onAuthChange, onToggleCart, cartItems }) {
  const [featuredItem, setFeaturedItem] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setFeaturedItem(data[randomIndex]);
        }
      })
      .catch(err => console.error('Error fetching products for featured item:', err));
  }, []);

  if (!featuredItem) {
    return (
      <main className="container-fluid bg-light text-center">
        <h1>Log in to access checkout</h1>
        <h3>or browse our other products!</h3>
        <NavLink className="btn btn-primary" to="/products">Products</NavLink>
      </main>
    );
  }

  const inCart = cartItems.includes(featuredItem.id);


  return (
    <main className="container-fluid bg-light text-center">
      <h1>Log in to access checkout</h1>

      <h3>or browse our other products!</h3>
      <NavLink className="btn btn-primary" to="/products">Products</NavLink>

      <h3>Or add this featured item to your cart!</h3>
      
      <section className="featured-item-box">
      <div key={featuredItem.id} className="product-box">
        <img src={featuredItem.image} alt={featuredItem.name} className="product-img" />
        <div>
            <h2>{featuredItem.name}</h2>
            <p>{featuredItem.description}</p>
        </div>
        <div className="product-actions">
          <button
            onClick={() => onToggleCart(featuredItem.id)}
            className={`btn ${ inCart ? 'btn-danger' : 'btn-success'} btn-sm`}
          >
            <img src="/shopping-cart.png" width="25" alt="Cart Icon" />
          </button>
          </div>
          <h4 id="checkout-price">{`$${featuredItem.price ?? 10}`}</h4>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-light text-center">
      <div>404 - Page Not Found</div>
      <p>
        Click here to <NavLink to="/">phone home</NavLink>
      </p>
    </main>
  );
}
