import React, { useState } from 'react';
import shopArt1 from './images/shopArt1.jpeg';
import './PageStyles.css';
import Navbar from './Navbar';

const initialCartItems = [
  { id: 1, name: 'Art Piece 1', price: 100, quantity: 1 },
  { id: 2, name: 'Art Piece 2', price: 200, quantity: 2 },
  { id: 3, name: 'Art Piece 3', price: 300, quantity: 1 },
];
const Cart = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (id, quantity) => {
        setCartItems(
        cartItems.map(item =>
            item.id === id ? { ...item, quantity: parseInt(quantity) } : item
        )
        );
    };

    const handleRemoveItem = id => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const getTotalCost = () => {
        return cartItems.reduce((total, item) => 20 + total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <Navbar />
            <div className="container cart-page" style={{marginTop: '80px', marginLeft: '80px'}}>
                <h1 style={{color: 'black', fontSize: '2.5rem', fontFamily: "'Lobster', cursive", marginLeft: '-50px'}}>Your Cart</h1>
                <hr style={{marginLeft: '-50px', marginRight: '-100%', color: 'grey'}}></hr>
                <div className='row' style={{border: '2px solid black', width: '85vw', paddingTop: '20px', borderRight: 'none'}}>
                    <div className="col">
                        {cartItems.map(item => (
                        <div key={item.id} className="cart-item" style={{width: '400px', marginLeft: '-30px', border: '2px solid black'}}>
                            <div className="card">
                            <div className="card-body">
                                <div style={{}}>
                                    <img src={shopArt1} alt="item" style={{width: '100%', height: '100%'}}/>
                                </div>
                                <h5 className="card-title mt-2">{item.name}</h5>
                                <p className="card-text">${item.price}</p>
                                <div className="quantity-input">
                                    <label htmlFor={`quantity-${item.id}`}>Quantity</label>
                                    <input type="number" id={`quantity-${item.id}`} min="1" value={item.quantity} onChange={e => handleQuantityChange(item.id, e.target.value)}/>
                                </div>
                                <button className="btn btn-primary search" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className='col' style={{color: 'black', marginTop: '100px'}}>
                        <div className="cart-summary">
                            <h2>Service Fee: $20</h2>
                            <h2>Total: ${getTotalCost()}</h2>
                            <div className="cart-actions">
                            <button className="btn btn-primary search" onClick={() => window.location.href = '/artconnect/shop'}>Continue Shopping</button>
                            <button className="btn btn-primary search" onClick={() => window.location.href = '/artconnect/checkoutPage'}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;