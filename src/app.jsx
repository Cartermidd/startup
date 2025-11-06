import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Products } from './products/products';
import { Login } from './login/login';
import { AuthState } from './login/authState';
import { Nav } from 'react-bootstrap';

  
export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  function handleAuthChange(username, newAuthState) {
    setUserName(username);
    setAuthState(newAuthState);
    if (newAuthState === AuthState.Authenticated) {
      localStorage.setItem('userName', username);
    } else {
      localStorage.removeItem('userName');
    }
  }

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
        <div className="login-container">
          <Login userName={userName} authState={authState} onAuthChange={handleAuthChange} />
        </div>
      </nav>
      
      <br />


      <nav>
        <ul className="pagination">
          <li className="page-item"><NavLink className="page-link" to="/">Home</NavLink></li>
          <li className="page-item"><NavLink className="page-link" to="products">Products</NavLink></li>
          <li className="page-item"><NavLink className="page-link" to="cart">Cart</NavLink></li>
          <li className="page-item">
            {authState === AuthState.Authenticated ? (
              <NavLink className="page-link" to="checkout">
                Check Out
              </NavLink>
            ) : (
              <NavLink className="page-link" to="login">
                Login
              </NavLink>
            )
          }
          </li>
          </ul>
      </nav>

    </header>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products cartItems={cartItems} onToggleCart={handleToggleCart} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} onToggleCart={handleToggleCart}/>} />
        <Route path='/checkout' element={<Checkout cartItems={cartItems} onToggleCart={handleToggleCart} userName={userName} authState={authState} />} />
        <Route path='login' element={<DisplayLogin userName={userName} authState={authState} onAuthChange={handleAuthChange}/>} />
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

function DisplayLogin({ userName, authState, onAuthChange }){
    return (
    <main className='container-fluid bg-light text-center'>
      <p>Log in to access check out</p>
      <div id='login-container2'>
      </div>
    </main>
  )
}

function NotFound() {
    return (<main className='container-fluid bg-light text-center'>
        <div>404 - Page Not Found</div>
        <p>click here to <NavLink to="/"> phone home</NavLink></p>
    </main>)
}