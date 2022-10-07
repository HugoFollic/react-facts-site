import React from "react";
import logo from "../assets/react-logo.png"

function Navbar() {
    return (
        <nav>
            <ul className="navbar-elements">
                <li>
                    <ul className="navbar-logo">
                        <li>
                            <img src={logo} width={40}></img>
                        </li>
                        <li>ReactFacts</li>
                    </ul>
                </li>
                <li>React Course - Project 1</li>
            </ul>
        </nav>
    );
}

export default Navbar;
