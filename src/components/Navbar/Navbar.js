import React from "react";

import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="nav-container">
            <ul className="nav-ul">
                <li className="nav-li"><Link to="/auth" ><img alt="user" className="navbar-icons" src='./assets/navbar/user.png' /></Link></li>
                <li className="nav-li"><Link to="/" >Home</Link></li>
                <li className="nav-li"><Link to="/shop" >shop</Link></li>
                <li className="nav-li"><Link to="/contact" >contact</Link></li>
                <li className="nav-li"><Link to="/card" ><img alt="shop-card" className="navbar-icons" src='./assets/navbar/shopping-bag.png' /></Link></li>
                
            </ul>

        </div>
    )
}

export default Navbar;