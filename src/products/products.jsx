import React, { useEffect } from 'react';

export function Products({ cartItems, onToggleCart }) {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const woodenProducts = products.filter(product => product.category === 'Wooden');
  const acrylicProducts = products.filter(product => product.category === 'Acrylic');
  const giftcardHolderProducts = products.filter(product => product.category === 'Giftcard Holder');
  const otherProducts = products.filter(product => product.category === 'Other');


  const renderProductSection = (title, productList, sectionId) => (
    <div id={sectionId} className="container-fluid product-type">
      <h2>{title}</h2>
      <div className='product-type-box'>
        {productList.map(product => {
          const productId = product.id;
          return (
        <div key={productId} className="product-box">
        <img
          className="product-img"
          src={product.image}
          alt={product.name}
        />
        <div className="product-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div id="cart-n-price">
        <button
          onClick={() => onToggleCart(productId)}
          className={`btn ${ cartItems.includes(productId) ? 'btn-danger' : 'btn-success'} btn-bg`}
        >
          {cartItems.includes(productId) ? 'In Cart' : 'Add to Cart'}
          <img src="/shopping-cart.png" width="25" alt="Cart Icon" />
        </button>
        <p>Price: ${product.price}</p>
        </div>
      </div>
        );
      })}
    </div>
    </div>
  );

  const submitRequest = () => {
    // function to handle custom design request submission
    alert('Your custom design request has been submitted!');
    alert("it actually hasn't yet")
  }

  return (
    <main className='container-fluid bg-light text-center'>
    <div>
      <h1>PRODUCTS</h1>
      <p>Browse our products and see which designs would be the perfect gift you are looking for!</p>
      <nav>
        <ul id="product-type-selection" className="pagination">
          <li className="page-item"><a className="page-link" href="#Wooden-Products">Wooden</a></li>
          <li className="page-item"><a className="page-link" href="#Acrylic-Products">Acrylic</a></li>
          <li className="page-item"><a className="page-link" href="#Giftcard-Holder-Products">Giftcard Holders</a></li>
          <li className="page-item"><a className="page-link" href="#Other-Products">Other</a></li>
          <li className="page-item"><a className="page-link" href="#Custom-Design-Requests">Custom Design Requests</a></li>
        </ul>
      </nav>


      {renderProductSection('Wooden Products', woodenProducts, 'Wooden-Products')}
      {renderProductSection('Acrylic Products', acrylicProducts, 'Acrylic-Products')}
      {renderProductSection('Giftcard Holder Products', giftcardHolderProducts, 'Giftcard-Holder-Products')}
      {renderProductSection('Other Products', otherProducts, 'Other-Products')}

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
            <button onClick={() => submitRequest()} type="submit" className="btn btn-primary btn-sm">Submit Request</button>
          </form>
        </div>

            </div>
        </main>
    )
}