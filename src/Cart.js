import React, { useState } from 'react';
import './PageStyles.css';

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
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container cart-page">
        <h1>Your Cart</h1>
        <div className="row cart-items">
            {cartItems.map(item => (
            <div key={item.id} className="col-md-4 cart-item">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                    <div className="quantity-input">
                    <label htmlFor={`quantity-${item.id}`}>Quantity</label>
                    <input
                        type="number"
                        id={`quantity-${item.id}`}
                        min="1"
                        value={item.quantity}
                        onChange={e => handleQuantityChange(item.id, e.target.value)}
                    />
                    </div>
                    <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
                </div>
            </div>
            ))}
        </div>
        <div className="cart-summary">
            <h2>Total: ${getTotalCost()}</h2>
            <div className="cart-actions">
            <button className="btn btn-secondary" onClick={() => window.location.href = '/shop'}>Continue Shopping</button>
            <button className="btn btn-primary search" onClick={() => window.location.href = '/checkout'}>Proceed to Checkout</button>
            </div>
        </div>
        </div>
    );
}
 
export default Cart;