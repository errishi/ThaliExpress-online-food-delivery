import React, { useContext, useState } from 'react';
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className='navbar'>
            <Link to={"/"}><img src={assets.logo} alt="logo" className='logo' /></Link>
            <ul className="navbar-menu">
                <li>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                </li>
                <li>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                </li>
                <li>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
                </li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search" />
                <div className="navbar-search-icon">
                    <Link to={"/cart"}><img src={assets.basket_icon} alt="basket" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={()=>setShowLogin(true)}>Sign in</button>
                : <div className='navbar-profile'>
                    <img src={assets.profile_image} alt="profile" />
                    <ul className="navbar-profile-dropdown">
                        <li><img src={assets.bag_icon} alt="dropdown" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="dropdown" /><p>Logout</p></li>
                        <hr />
                    </ul>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Navbar;