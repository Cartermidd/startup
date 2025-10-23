import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Products } from './products/products';
import { useState } from 'react';

  
export default function App() {
  // if item is not in cart array and button is pressed, add item to cart and change button color to red
  // if item is in cart array and button is pressed, remove item from cart and change button color to green
  const [cartItems, setCartItems] = useState(() => {
      const saved = localStorage.getItem('cartItems');
      return saved ? JSON.parse(saved) : []; 
    });

  const handleToggleCart = (productId) => {
    setCartItems(prev => 
      prev.includes(productId) //if item is already in cart
        ? prev.filter(id => id !== productId) //filter it out (remove)
        : [...prev, productId] //else add it (add)
    )};

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch {
      // localStorage error
    }
  }, [cartItems]);


    return (
        <BrowserRouter>
        <div className='app bg-light text-dark'>

        <header className="container-fluid bg-info">
      <nav className="navbar" id="login_n_logo">
        <div id="logo">
          <NavLink to="/"><img width="175px" src="/rockcanyon_design.png" alt="Rock Canyon Design" /></NavLink>
        </div>
        <div id="login">
          <h5>Login or Create Account</h5>
          <form method="get" action="/login">
          <div className="input-group mb-1"><input className="form-control" type="text" id="username" name="userText" placeholder="Username" required pattern=".*" /></div>
          <div className="input-group mb-1"><input className="form-control" type="password" id="password" name="passwordText" placeholder="Password" required pattern=".*" /></div>
          <button type="submit" className="btn btn-primary btn-sm">Login</button>
          <button type="button" className="btn btn-secondary btn-sm">Create</button>
          </form>
        </div>
      </nav>
      
      <br />


      <nav>
        <ul className="pagination">
          <li className="page-item"><NavLink className="page-link" to="/">Home</NavLink></li>
          <li className="page-item"><NavLink className="page-link" to="products">Products</NavLink></li>
          <li className="page-item"><NavLink className="page-link" to="cart">Cart</NavLink></li>
          <li className="page-item"><NavLink className="page-link" to="checkout">Check Out</NavLink></li>
        </ul>
      </nav>

    </header>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products cartItems={cartItems} onToggleCart={handleToggleCart} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} onToggleCart={handleToggleCart}/>} />
        <Route path='/checkout' element={<Checkout cartItems={cartItems} onToggleCart={handleToggleCart}/>} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    
    

    <footer>
      <span id='sillyfootertext' className="text-reset">Site designed by   </span>
      <a id='sillyfootertextname' href="https://github.com/Cartermidd">Carter Middleton</a>
    </footer>  
        </div>
        </BrowserRouter>
    )
}


function NotFound() {
    return <main className='container-fluid bg-light text-center'>
        <div>404 - Page Not Found</div>
        <p>click here to <NavLink to="/"> phone home</NavLink></p>
    </main>
}