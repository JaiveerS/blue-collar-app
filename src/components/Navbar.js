import React from "react";
import Logo from "../images/ontreno-logo.png";
import {Link} from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'
import styled from 'styled-components';


export default function Navbar() {
    const [isOpen, setOpen] = React.useState(false)
    const closeMenu = () => setOpen(false);

    return(
        // <nav className="navbar">
        //     <div className="navbar--container">
        //         <Link to="/" className="navbar--logo" onClick={closeMenu}>
        //             <img className="navbar--logo" src={Logo} alt="OntReno" ></img>
        //         </Link>
        //         <div className="menu--icon">
        //             <Hamburger toggled={isOpen} toggle={setOpen} color="black"/>
        //         </div>
        //         <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        //             <li className="nav--item">
        //                 <Link to='/' className="nav--links" onClick={closeMenu}>
        //                     Home
        //                 </Link>
        //             </li>
        //             <li className="nav--item">
        //                 <Link to='/about-us' className="nav--links" onClick={closeMenu}>
        //                     About Us
        //                 </Link>
        //             </li>
        //             <li className="nav--item">
        //                 <Link to='/projects' className="nav--links" onClick={closeMenu}>
        //                     Projects
        //                 </Link>
        //             </li>
        //             <li className="nav--item">
        //                 <Link to='/contact-us' className="nav--links" onClick={closeMenu}>
        //                     Contact Us
        //                 </Link>
        //             </li>
        //             <li className="nav--item">
        //                 <a className="nav--links--mobile" href="tel:+16476393289">
        //                     Call
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <Nav>
            <Container>
                <Link to="/" onClick={closeMenu}>
                    <Img src={Logo} alt="OntReno" ></Img>
                </Link>
                {/*Hamburger & button for mobile only */}
                <Button href="tel:+16476393289">Call</Button>
                <HamburgerMenu>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
                </HamburgerMenu>
                <Menu>
                    <LinkWrapper>
                        <MenuLink>
                            <Link to="/" onClick={closeMenu}>Home</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/services" onClick={closeMenu}>Services</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/projects" onClick={closeMenu}>Projects</Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
                        </MenuLink>
                    </LinkWrapper>
                </Menu>
            </Container>
        </Nav>
    )
}

const Nav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: #921010;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    max-width: 1000px;
    margin: auto;
`;

const Img = styled.img`
    height: 4rem;
`;
const Menu = styled.div`
    
`;
const LinkWrapper = styled.a`
    a {
        text-decoration: none;
        color: white;
        font-size: 0.9rem;
        padding: 0.7rem 1rem;
        transition: all 0.1s ease-in;
        border-radius: 0.5rem;
        font-weight: 500;
        
        &:hover {
        color: white;
        background: #800707;
        }
    }
`;
const MenuLink = styled.a`
    color:white;
`;
const Button = styled.a`
    display:none;
    text-decoration: none;
    font-size: 0.8rem;
    background: white;
    border: none;
    padding: 0.8rem 1.1rem;
    color: black;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #ecb6d7;
    transition: all 0.3s ease-in-out;
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
    }

    @media (max-width: 670px) {
    padding: 0.3;
    display: flex;
    }
`;

const HamburgerMenu = styled.div`
    display: none;
    }
    @media (max-width: 670px) {
    display: flex;
    }
`;


