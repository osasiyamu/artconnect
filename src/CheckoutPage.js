import React, { useState } from 'react';
import Navbar from './Navbar';

const CheckoutPage = () => {
    const [shippingAddress, setShippingAddress] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });
    const [billingAddress, setBillingAddress] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });
    const [useSameAddress, setUseSameAddress] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({});

    const validateInput = () => {
        let newErrors = {};

        // Basic validation logic
        if (!shippingAddress.name) newErrors.name = "Name is required.";
        if (!shippingAddress.street) newErrors.street = "Street is required.";
        if (!shippingAddress.city) newErrors.city = "City is required.";
        if (!shippingAddress.state) newErrors.state = "State is required.";
        if (!shippingAddress.zip) newErrors.zip = "Zip Code is required.";
        if (!shippingAddress.country) newErrors.country = "Country is required.";

        // Card validation
        if (paymentMethod === 'creditCard') {
            const cardNumberRegex = /^\d{16}$/;
            if (!cardDetails.cardNumber.match(cardNumberRegex)) newErrors.cardNumber = "Invalid card number.";

            const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
            if (!cardDetails.expiryDate.match(expiryDateRegex)) newErrors.expiryDate = "Invalid expiry date.";

            const cvvRegex = /^[0-9]{3,4}$/;
            if (!cardDetails.cvv.match(cvvRegex)) newErrors.cvv = "Invalid CVV.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePlaceOrder = () => {
        if (validateInput()) {
            console.log('Order placed');
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ color: 'black', marginTop: '40px', padding: '2rem' }}>
                <h2 style={{fontSize: '2.5rem', fontFamily: "'Lobster', cursive"}}>Checkout</h2>
                <hr style={{color: 'grey', marginTop: '2px'}}></hr>
                <div style={{ borderLeft: '2px solid lightGrey', paddingLeft: '5px', marginBottom: '2rem', boxShadow: '10px' }}>
                    <h3>Order Summary</h3>
                    <div className='ms-5'>
                        <p>Art Piece 1 - $100</p>
                        <p>Art Piece 2 - $150</p>
                        <p>Subtotal: $250</p>
                        <p>Shipping: $10</p>
                        <p>Tax: $20</p>
                        <p>Total: $280</p>
                    </div>
                </div>
                <div style={{ borderLeft: '2px solid lightGrey', paddingLeft: '5px', marginBottom: '2rem' }}>
                    <h3>Shipping Information</h3>
                    <form className='ms-5'>
                        <input className='me-2' type="text" placeholder="Name" value={shippingAddress.name} onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })} />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        <input className='me-2' type="text" placeholder="Street" value={shippingAddress.street} onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })} />
                        {errors.street && <p style={{ color: 'red' }}>{errors.street}</p>}
                        <select className='me-2' value={shippingAddress.city} onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}>
                            <option value="">Select City</option>
                            <option value="City1">City1</option>
                            <option value="City2">City2</option>
                            <option value="City3">City3</option>
                        </select>
                        {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
                        <select className='me-2' value={shippingAddress.state} onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}>
                            <option value="">Select State</option>
                            <option value="State1">State1</option>
                            <option value="State2">State2</option>
                            <option value="State3">State3</option>
                        </select>
                        {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
                        <input className='me-2' type="text" placeholder="Zip Code" value={shippingAddress.zip} onChange={(e) => setShippingAddress({ ...shippingAddress, zip: e.target.value })} />
                        {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}
                        <select className='me-2' value={shippingAddress.country} onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}>
                            <option value="">Select Country</option>
                            <option value="Country1">Country1</option>
                            <option value="Country2">Country2</option>
                            <option value="Country3">Country3</option>
                        </select>
                        {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
                    </form>
                </div>
                <div style={{ borderLeft: '2px solid lightGrey', paddingLeft: '5px', marginBottom: '2rem' }}>
                    <h3>Billing Information</h3>
                    <input className='ms-5' type="checkbox" checked={useSameAddress} onChange={() => setUseSameAddress(!useSameAddress)} /> Use same address for billing
                    {!useSameAddress && (
                        <form className='ms-5'>
                            <input className='me-2' type="text" placeholder="Name" value={billingAddress.name} onChange={(e) => setBillingAddress({ ...billingAddress, name: e.target.value })} />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                            <input className='me-2' type="text" placeholder="Street" value={billingAddress.street} onChange={(e) => setBillingAddress({ ...billingAddress, street: e.target.value })} />
                            {errors.street && <p style={{ color: 'red' }}>{errors.street}</p>}
                            <select className='me-2' value={billingAddress.city} onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}>
                                <option value="">Select City</option>
                                <option value="City1">City1</option>
                                <option value="City2">City2</option>
                                <option value="City3">City3</option>
                            </select>
                            {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
                            <select className='me-2' value={billingAddress.state} onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}>
                                <option value="">Select State</option>
                                <option value="State1">State1</option>
                                <option value="State2">State2</option>
                                <option value="State3">State3</option>
                            </select>
                            {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
                            <input className='me-2' type="text" placeholder="Zip Code" value={billingAddress.zip} onChange={(e) => setBillingAddress({ ...billingAddress, zip: e.target.value })} />
                            {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}
                            <select className='me-2' value={billingAddress.country} onChange={(e) => setBillingAddress({ ...billingAddress, country: e.target.value })}>
                                <option value="">Select Country</option>
                                <option value="Country1">Country1</option>
                                <option value="Country2">Country2</option>
                                <option value="Country3">Country3</option>
                            </select>
                            {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
                        </form>
                    )}
                </div>
                <div style={{ borderLeft: '2px solid lightGrey', paddingLeft: '5px', marginBottom: '2rem' }}>
                    <h3>Payment Method</h3>
                    <form className='ms-5'>
                        <div>
                            <input type="radio" name="paymentMethod" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={(e) => setPaymentMethod(e.target.value)} /> Credit Card
                            {paymentMethod === 'creditCard' && (
                                <div>
                                    <input className='me-2' type="text" placeholder="Card Number" value={cardDetails.cardNumber} onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} />
                                    {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}
                                    <input className='me-2' type="text" placeholder="Expiry Date" value={cardDetails.expiryDate} onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} />
                                    {errors.expiryDate && <p style={{ color: 'red' }}>{errors.expiryDate}</p>}
                                    <input className='me-2' type="text" placeholder="CVV" value={cardDetails.cvv} onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
                                    {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
                                </div>
                            )}
                        </div>
                        <div>
                            <input type="radio" name="paymentMethod" value="paypal" checked={paymentMethod === 'paypal'} onChange={(e) => setPaymentMethod(e.target.value)} /> PayPal
                        </div>
                    </form>
                </div>
                <div >
                    <button className="btn btn-primary search justify-content-" onClick={() => { window.location = '/artconnect/cart'}}>Back to Cart</button>
                    <button className="btn btn-primary search justify-content-end" data-toggle="modal" data-target=".bd-example-modal-lg" style={{ marginLeft: '70rem' }} onClick={handlePlaceOrder}>Place Order</button>
                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Congratulations!</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body text-center mt-3">
                                    <h6>Your Order has be placed!</h6>
                                    <p>Ignore the Errors that display on the screen after placing order</p>
                                    <button className='btn btn-primary search' onClick={() => window.location = '/artconnect/'}>Go Home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
