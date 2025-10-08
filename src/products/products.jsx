import React from 'react';


export function Products() {
    return (
        <main className='container-fluid bg-primary text-center'>
            <div>
      <h1>PRODUCTS</h1>
      <p>Browse our products and see which designs would be the perfect gift you are looking for!</p>
      <nav>
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#Wooden-Products">Wooden</a></li>
          <li className="page-item"><a className="page-link" href="#Acrylic-Products">Acrylic</a></li>
          <li className="page-item"><a className="page-link" href="#Giftcard-Holder-Products">Giftcard Holders</a></li>
          <li className="page-item"><a className="page-link" href="#Other-Products">Other</a></li>
          <li className="page-item"><a className="page-link" href="#Custom-Design-Requests">Custom Design Requests</a></li>
        </ul>
      </nav>

      <div id = "Wooden-Products" className = "product-type">
        <h2>Wooden Products</h2>
        <div className="product-box">
           
          <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
          <div>
            <h2>Placeholder Name</h2>
            <p>Placeholder description</p>
          </div>
           
        </div>

        <div className="product-box">
           
          <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
          <div>
            <h2>Placeholder Name</h2>
            <p>Placeholder description</p>
          </div>
           
        </div>
      </div>



      <div id = "Acrylic-Products" className = "product-type">
        <h2>Acrylic Products</h2>
        <div className="product-box">
           
          <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
          <div>
            <h2>Placeholder Name</h2>
            <p>Placeholder description</p>
          </div>
           
        </div>

        <div className="product-box">
          <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
          <div>
            <h2>Placeholder Name</h2>
            <p>Placeholder description</p>
          </div>
           
        </div>

              <div className="product-box">
           
            <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
            <div>
              <h2>Placeholder Name</h2>
              <p>Placeholder description</p>
            </div>
           
        </div>
      </div>



      <div id = "Giftcard-Holder-Products" className = "product-type">
        <h2>Giftcard Holder Products</h2>
        <div className="product-box">
           
          <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
          <div>
            <h2>Placeholder Name</h2>
            <p>Placeholder description</p>
          </div>
           
        </div>

        <div className="product-box">
           
          <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
          <div>
            <h2>Placeholder Name</h2>
            <p>Placeholder description</p>
          </div>
           
        </div>

              <div className="product-box">
           
            <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
            <div>
              <h2>Placeholder Name</h2>
              <p>Placeholder description</p>
            </div>
           
        </div>

        </div>

      <div id = "Other-Products" className = "product-type">
        <h2>Other Products</h2>
        <div className="product-box">
           
          <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
          <div>
            <h2>Placeholder Name</h2>
            <p>Placeholder description</p>
          </div>
           
        </div>

        <div className="product-box">
           
          <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
          <div>
            <h2>Placeholder Name</h2>
            <p>Placeholder description</p>
          </div>
           
        </div>

        <div className="product-box">
           
            <img width="100px" src="/rockcanyon_design.png" alt="Placeholder" />
            <div>
              <h2>Placeholder Name</h2>
              <p>Placeholder description</p>
            </div>
           
        </div>
      </div>


        <div id="Custom-Design-Requests" className="product-type">
          <h2>Custom Design Requests</h2>
          <p>Haven't found the perfect design yet? Fill out the form below to contact us about making you a customized product!</p>
          

          <form action="formSubmit.html" method="post">
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br />
            <label htmlFor="details">Design Description:</label><br />
            <textarea id="details" name="details" rows="4" cols="50" required></textarea><br />
            <label htmlFor="file">Optional Image Upload:</label><br />
            <input type="file" id="file" name="file" accept="image/*" /><br />
            <button type="submit" className="btn btn-primary btn-sm">Submit Request</button>
          </form>
        </div>

            </div>
        </main>
    )
}