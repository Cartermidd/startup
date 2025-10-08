import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='app bg-dark text-light'>

        <header className="container-fluid">
      <nav className="navbar" id="login_n_logo">
        <div id="logo">
          <a href="index.html"><img width="175px" src="/rockcanyon_design.png" alt="Rock Canyon Design" /></a>
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
          <li className="page-item active"><a className="page-link" href="index.html">Home</a></li>
          <li className="page-item"><a className="page-link" href="products.html">Products</a></li>
          <li className="page-item"><a className="page-link" href="cart.html">Cart</a></li>
          <li className="page-item"><a className="page-link" href="checkout.html">Check Out</a></li>
        </ul>
      </nav>

    </header>
    <main className='container-fluid bg-primary text-center'>App components</main>
    <hr />
    <footer>
      <span id='sillyfootertext' className="text-reset">Site designed by   </span>
      <a id='sillyfootertextname' href="https://github.com/Cartermidd">Carter Middleton</a>
    </footer>  
        </div>
    )
}