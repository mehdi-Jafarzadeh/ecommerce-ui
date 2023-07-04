import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="nav-container">
            <ul className="nav-ul">
                <li className="nav-li">item</li>
                <li className="nav-li">item</li>
                <li className="nav-li">item</li>
                <FontAwesomeIcon icon={["fal", "coffee"]} />
            </ul>

        </div>
    )
}

export default Navbar;