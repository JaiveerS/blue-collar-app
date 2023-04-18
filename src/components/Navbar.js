import React, { useState } from "react";
import Logo from "../images/ontreno-logo.png";
import {Link} from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'
import styled from 'styled-components';


export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const closeMenu = () => setOpen(false);

    return(
        <Nav isOpen={isOpen}>
            {/* <Info/> */}
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
                        <MenuLink to="/projects" onClick={closeMenu}>Projects</MenuLink>
                        <MenuLink to="/contact" onClick={closeMenu}>Contact</MenuLink>
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
    position: ${({ isOpen }) => (isOpen ? 'fixed' : 'absolute')};
    overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'visible')};
    height: ${({ isOpen }) => (isOpen ? '100%' : 'auto')};
    
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    max-width: 1250px;
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
        margin-top: 10px;
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
        font-size: 1.2rem;
        padding: 0.7rem 1rem;
        transition: all 0.1s ease-in;
        border-radius: 0.5rem;
        font-weight: 500;
        
        &:hover {
        font-weight: 750;
    }
    
    @media (max-width: 670px) {
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
    @media (min-width: 670px){
        &:hover {
            color:white;
        }
    }

    @media (max-width: 670px) {
        display: flex;
        flex-direction:column;
        overflow:hidden;
        
            &:hover {
            font-weight: 750;
            color: #860F0F;
            background: white;
        }
    }
`;
const Button = styled.a`
    display:none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    text-align: center;
    
    @media (max-width: 670px) {
        display: flex;
        background: green;
        margin-top: 25px;
        min-width: 250px;
        &:hover{
            color: white;
        }
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

