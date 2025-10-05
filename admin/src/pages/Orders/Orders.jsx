import React from 'react';
import "./Orders.css";
import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { assets } from '../../assets/assets';

const Orders = ({server_url}) => {
  const [orders, setOrders] =useState([]);

  const fetchAllOrders = async() => {
    const response = await axios.get(`${server_url}/api/order/list`);
    if(response.data.success){
      setOrders(response.data.data);
    }else{
      toast.error("Something went wrong!");
    }
  }

  const statusHandler = async(event, orderId) => {
    const response = await axios.post(`${server_url}/api/order/status`, {
      orderId,
      status: event.target.value
    });
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Orders Page</h3>
      <div className="orders-list">
        {orders.map((order, index)=>(
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="order image" />
            <div>
              <p className="order-item-food">
                {order.items.map((item,index)=>{
                  if(index === order.items.length - 1){
                    return item.name + " x " + item.quantity
                  }else{
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode}</p>
              </div>
              <p className='order-item-phone'>+91-{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>{"\u20B9"} {order.amount}</p>
            <select onChange={(event)=>statusHandler(event, order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Order Confirmed">Order Confirmed</option>
              <option value="Ready for Pickup">Ready for Pickup</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders;