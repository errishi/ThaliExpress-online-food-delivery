import React from 'react';
import "./Siderbar.css";
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to="/add" className="sidebar-option">
                <img src={assets.cart_plus} className='icon' alt="add item" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to="/list" className="sidebar-option">
                <img src={assets.list_item_check} className='icon' alt="list item" />
                <p>List Items</p>
            </NavLink>
            <NavLink to="/orders" className="sidebar-option">
                <img src={assets.receipt} className='icon' alt="orders" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar;