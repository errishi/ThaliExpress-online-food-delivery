import React from 'react';
import "./Siderbar.css";
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.cart_plus} className='icon' alt="add item" />
                <p>Add Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.list_item_check} className='icon' alt="list item" />
                <p>List Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.receipt} className='icon' alt="orders" />
                <p>Orders</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;