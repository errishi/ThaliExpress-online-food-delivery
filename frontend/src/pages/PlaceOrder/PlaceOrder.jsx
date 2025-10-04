import React, { useContext, useState } from 'react';
import "./PlaceOrder.css";
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, server_url, cartItems } = useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data)=>({...data, [name]:value}));
    }

    const placeOrder = async(event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
        if (cartItems[item._id] > 0) {
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id];
            orderItems.push(itemInfo);
        }
    });
    let orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartAmount() + 15
    };

    try {
        let response = await axios.post(
            server_url + "/api/order/place",
            orderData,
            {
                headers: {
                    token: token   // ✅ FIX HERE
                }
            }
        );

        if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
        } else {
            alert("Error");
        }
    } catch (error) {
        console.error("Order Error:", error);
        alert("Something went wrong!");
    }
};


    return (
        <form onSubmit={placeOrder} className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' required />
                    <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' required />
                </div>
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' required />
                <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' required />
                <div className="multi-fields">
                    <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' required />
                    <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required />
                </div>
                <div className="multi-fields">
                    <input name='zipCode' onChange={onChangeHandler} value={data.zipCode} type="number" placeholder='Zip code' required />
                    <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' required />
                </div>
                <input name='phone' onChangeCapture={onChangeHandler} value={data.phone} type="number" placeholder='Phone' required />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{"\u20B9"} {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{"\u20B9"} {getTotalCartAmount() === 0 ? 0 : 15}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{"\u20B9"} {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 15}</b>
                        </div>
                    </div>
                    <button type='submit'>PROCEED TO PAY</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder;