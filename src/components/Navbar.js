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
        <Nav isOpen={isOpen}>
            <Container>
                <Link to="/" onClick={closeMenu}>
                    <Img src={Logo} alt="OntReno" ></Img>
                </Link>
                {/*Hamburger & button for mobile only */}
                <HamburgerMenu>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
                </HamburgerMenu>
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                            <MenuLink to="/" onClick={closeMenu}>Home</MenuLink>
                            {/* <Divider/> */}
                            <MenuLink to="/services" onClick={closeMenu}>Services</MenuLink>
                            {/* <Divider/> */}
                            <MenuLink to="/projects" onClick={closeMenu}>Projects</MenuLink>
                            {/* <Divider/> */}
                            <MenuLink to="/contact" onClick={closeMenu}>Contact Us</MenuLink>
                            {/* <Divider/> */}
                        <Button href="tel:+16475448925">Call Us</Button>
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
    background-color: ${({ isOpen }) => (isOpen ? "#860F0F" : "#921010")};
    
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    max-width: 1000px;
    margin: auto;
    flex-wrap: wrap;
    
`;

const Img = styled.img`
    height: 4rem;
    padding-left: 25px;
    
`;
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 670px) {
        padding-top: 30px;
        border-radius: 1rem;
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
        padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
    transition: width 2s, height 2s, transform 2s;
    width: 100%;
`;
const LinkWrapper = styled.div`
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
    
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding: 20px;
      }
`;
const MenuLink = styled(Link)`
    color:white;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    @media (max-width: 670px) {
        display: flex;
        flex-direction:column;
        overflow:hidden;
    }
`;
const Button = styled.a`
    display:none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    text-align: center;
    
    @media (max-width: 670px) {
        padding: 0.5;
        display: flex;
        flex-direction: column;
        background: green;
        width: 200%;
        margin-left: -60px;
        margin-top: 40px;
    }
`;

const HamburgerMenu = styled.div`
    display: none;
    flex-direction: column;
    padding-right: 25px;
    }
    @media (max-width: 670px) {
        display: flex;
    }
`;

const Divider = styled.hr`
    display:none;
    @media (max-width: 670px) {
        display: block;
        border-top: 4px solid #000000;
        border-radius: 5px;
    }
`;
