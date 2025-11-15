import React from "react";
import './admin.css';


export function Admin() {
    const [form, setForm] = React.useState({
        name: '',
        description: '',
        price: '',
        category: 'Wooden',
    });
    function update(field){
        return (e) => setForm((f) => ({...f, [field]: e.target.value}));
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const priceNum = Number(form.price);
        if (Number.isNaN(priceNum) || priceNum < 0 || priceNum > 10000) {
            alert('Please enter a valid price.');
            return;
        }
        const productpayload = {
            name: form.name.trim(),
            description: form.description.trim(),
            price: priceNum,
            category: form.category,
        };
        try {
            const res = await fetch('/api/admin/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productpayload),
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.msg || `Request failed: ${res.status}`);
            }
            alert('Product submitted!');
            setForm({
                name: '',
                description: '',
                price: '',
                category: 'Wooden',
            });
        } catch (err) {
            alert(`Error submitting product: ${err.message}`);
        }
    }



    return (
        <main className='container-fluid bg-light text-center'>
        <div>   
            <h1>Admin Access Panel</h1>
            <p>Hi mom!</p>
        </div>
        <div>
        <h2>Submit new product</h2>
        <p>This form will submit a new product to the database and will automatically start showing up!</p>
        
        <form onSubmit={handleSubmit} className="admin-form">
            <div id="product-type-selection">
            <p>Product type:</p>
            <input type="radio" id="cat-wooden" name="category" value="Wooden" checked={form.category === 'wooden'} onChange={update('category')}/> <label htmlFor="cat-wooden">Wooden</label>
            <input type="radio" id="cat-acrylic" name="category" value="Acrylic" checked={form.category === 'acrylic'} onChange={update('category')}/> <label htmlFor="cat-acrylic">Acrylic</label>
            <input type="radio" id="cat-gifcard" name="category" value="Giftcard Holder" checked={form.category === 'giftcardholder'} onChange={update('category')}/> <label htmlFor="cat-giftcard">Giftcard Holder</label>
            <input type="radio" id="cat-other" name="category" value="Other" checked={form.category === 'other'} onChange={update('category')}/> <label htmlFor="cat-other">Other</label>
            </div>

            <br/>
            <input type="text" placeholder="Product Name" value={form.name} onChange={update('name')} required/><br/>
            <label htmlFor="details">Design Description:</label><br />
            <textarea id="details" rows="4" cols="50" value={form.description} onChange={update('description')} required></textarea><br />
            <input type="number" placeholder="Price" value={form.price} onChange={update('price')} min="0" step="0.01" required/><br/>
       


            <button type="submit" className="btn btn-primary btn-sm">Submit Product</button>
        </form>
        </div>
        </main>
    );
}