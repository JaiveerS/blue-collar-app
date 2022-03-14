import React from "react";
import Logo from "../images/ontreno-logo.svg";
import './Navbar.css';
import {Link} from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'


export default function Navbar() {
    const [isOpen, setOpen] = React.useState(false)

    const closeMenu = () => setOpen(false);

    return(
        <nav className="navbar">
            <div className="navbar--container">
                <Link to="/" className="navbar--logo" onClick={closeMenu}>
                    <img className="navbar--logo" src={Logo} alt="OntReno" ></img>
                </Link>
                <div className="menu--icon">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="black"/>
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav--item">
                        <Link to='/' className="nav--links" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/about-us' className="nav--links" onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/projects' className="nav--links" onClick={closeMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/contact-us' className="nav--links" onClick={closeMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav--item">
                        <a className="nav--links--mobile" href="tel:+16476393289">
                            Call
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

