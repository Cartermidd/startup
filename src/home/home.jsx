import React from 'react';


export function Home() {
    return (
        <main className='container-fluid bg-primary text-center'>
            <div>
        <div className="bd-example">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
            </svg>
          </div>

          <div className="carousel-item">
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
            </svg>
          </div>
          
          <div className="carousel-item">
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
            </svg>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <br></br>
      <h3>
        Rock Canyon Design is a company that my mom recently started to sell custom handcrafted laser-cut creations.
      </h3>

      <p>
        When I told her I was developing my web programming skills, she asked if I would design a website that would:
      </p>
        <ol>
          <li>Showcase her products through professional photos and videos.</li>
          <li>Provide a simple and secure way for customers to browse and purchase products.</li>
          <li>Allow customers to customize details in certain patterns to order individualized products.</li>
        </ol>
      
      <p>
        This website is an attempt to fulfill those requests.
      </p>

      <div id="products-nav" className="nav-bar">
        <a href=""><img width="150px" src="/rockcanyon_design.png" alt="Placeholder" /></a>
        <a href=""><img width="150px" src="/rockcanyon_design.png" alt="Placeholder" /></a>
        <a href=""><img width="150px" src="/rockcanyon_design.png" alt="Placeholder" /></a>
        <a href=""><img width="150px" src="/rockcanyon_design.png" alt="Placeholder" /></a>
      </div>


      <div id="our-story">
        <h2>How do we make our designs?</h2>
        <p>Glad you asked.</p><br />
        <p>[Placeholder text describing the process from idea - design - laser-cutter - from our porch to yours]</p>
        <div>
            <img width="300px" src="laser-cutter-glowforge.webp" alt="Placeholder" />
        </div>
      </div>



      <div id="about" className="text-box">
        <h2>About Rock Canyon Design</h2>
        <p>
          Rock Canyon Design is a small business based in Provo, Utah that specializes in creating custom laser-cut designs. Our products are perfect for gifts, home decor, and personalized items. We take pride in our craftsmanship and attention to detail, ensuring that each piece is made with care and precision.
        </p>
        <p>
          Whether you're looking for a unique gift or a special item for yourself, Rock Canyon Design has something for everyone. Browse our selection of products and find the perfect design for your needs!
        </p>
      </div>

    </div>
    </main>
    )
}