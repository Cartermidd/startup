import React from 'react';


export function Cart() {
    return (
        <main className='container-fluid bg-primary text-center'>
      <h1>
        Your Cart
      </h1>

      <p>
        Your cart is empty. (Database data/Websocket goes here)
      </p>

      <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="50%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#FFFF00"></rect>
        </svg>


        <div className="card-body">
          <h5 className="card-title">Placeholder Product Name 1</h5>
          <p className="card-text">Placeholder explanation or discription about a product.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="50%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#20c997"></rect>
        </svg>


        <div className="card-body">
          <h5 className="card-title">Placeholder Product Name 2</h5>
          <p className="card-text">Placeholder explanation or discription about a product.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
        <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="50%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#89CFF0"></rect>
        </svg>


        <div className="card-body">
          <h5 className="card-title">Placeholder Product Name 3</h5>
          <p className="card-text">Placeholder explanation or discription about a product.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      <hr />
        </main>
    )
}