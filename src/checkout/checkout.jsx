import React from 'react';


export function Checkout() {
    return (
        <main className='container-fluid bg-light text-center'>
            <div>
                <h1>CHECK OUT</h1>

                <h2>Welcome, [username]!</h2>

                <p>
                    Abreviated version of Cart
                    (websocket goes here)
                </p>

                <div id="price-n-pay-box">
                    <h2>Total Price: $ [price_variable]</h2>
                    <button type="submit" className="btn btn-primary btn-sm">Purchase</button>
                </div>

                <div id="shipping-info">
                    <h2>API shipping information</h2>
                    <img width="200px" src="" alt="Some sort of shipping display" />
                </div>
 
            </div>
        </main>
    )
}