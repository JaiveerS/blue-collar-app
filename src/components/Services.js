import React from "react";
import styled from 'styled-components';
import drawing1 from '../images/gallery/27.jpg'
import drawing2 from '../images/gallery/35.jpg'
import belowgrade1 from '../images/gallery/50.jpg'
import belowgrade2 from '../images/gallery/54.jpg'
import belowgrade3 from '../images/gallery/46.jpg'
import belowgrade4 from '../images/gallery/28.jpg'


export default function Services() {
    return (
      <Content>
        <Title>Our Services</Title>
        <Title>We Specialize In Legal Basements</Title>
        <Header>We Do It All </Header>
        <Header>obtain building permits & prepare architectural drawings</Header>
        <ImageContainer>
          <img src={drawing1} loading="lazy "alt="architectural drawings" width="50%"/>
          <img src={drawing2} loading="lazy "alt="architectural drawings" width="50%"/>
        </ImageContainer>
        <Header>Book Inspections</Header>
        <Header>Digg Legal below grade entrances</Header>
        <ImageContainer>
          <img src={belowgrade1} loading="lazy "alt="below grade entrance" width="50%"/>
          <img src={belowgrade2} loading="lazy "alt="below grade entrance" width="50%"/>
          <img src={belowgrade3} loading="lazy "alt="below grade entrance" width="50%"/>
          <img src={belowgrade4} loading="lazy "alt="below grade entrance" width="50%"/>
        </ImageContainer>
        <Header>Framing</Header>
        <Header>Plumbing</Header>
        <Header>Kitchens</Header>
        <Header>Bathrooms</Header>
        <Header>Living Room</Header>
        
        <Header>Aswell as Major House Renovations</Header>
        <p>insert images here showing additonal services</p>
        <Header>
            <Head>Give us a call for a free estimae</Head>
            <Head>Contact</Head>
            <Body>647-544-8925</Body>
            <Head>Address</Head>
            <Body>36 Carl Finlay Drive <br/>Brampton, Ontario L6R 1Y5 <br /> Canada</Body>
        </Header>
      </Content>
      )
}


const Content = styled.div`
  width:80%;
  max-width:1000px;
  margin: auto;
  padding-top:85px;
  min-height: 90vh;
  @media (max-width: 670px) {
    padding-top:85px;
    width: 95%;
  }
`;

const Title = styled.h2`
  background: #921010;
  border-radius:5px;
  color:white;
  padding:5px;
`;

const Header = styled.h3`
  background: #921010;
  border-radius:5px;
  color:white;
  padding:5px;
`;

const Head = styled.p`
  color: white;
`;

const Body = styled.p`
  color: white;
`;

const ImageContainer = styled.div`
  display:flex;
`;