import React from "react";
import Logo from "../images/ontreno-logo.svg"
import './Navbar.css';

export default function Navbar() {
    return(
        <div className="nav">
            <img className="nav--icon" src={Logo} alt="OntReno" ></img>
        </div>
    )
}

