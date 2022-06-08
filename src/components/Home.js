import React from "react";
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../images/gallery/34.jpg'
import image2 from '../images/gallery/2.jpg'
import image3 from '../images/gallery/14.jpg'
import {Link} from 'react-router-dom'
import CardImport from './Card';
import image50 from '../images/gallery/50.jpg'
import image51 from '../images/gallery/1.jpg'




const slideImages = [
  {
    image: {src:image1},
    caption: 'Get A FREE ESTIMATE NOW!',
    url: '/contact'
  },
  {
    image: {src:image2},
    caption: 'Check Out Our Services!',
    url: '/services'
  },
  {
    image: {src:image3},
    caption: 'Check Out Some Of Our Projects!',
    url: '/projects'
  }
];

export default function Home() {
    return (
      <Content>
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{backgroundImage: `url(${slideImage.image.src})`}}>
                <span><SliderLink to={slideImage.url} >{slideImage.caption}</SliderLink></span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <ServicesContainer>
        <ContainerItems>
        {/* <Title>Services</Title> */}
            <CardContainer>
            <Card Img={image51} Title="We Build Legal Basements" Content="Full basement renovations"/>
            <Card Img={image50} Title="Below Ground Entrances" Content="we build legal below ground entrances"/>
            <Card Img={image51} Title="Custom Kitchens" Content="build fully custom kitchens"/>
            <Card Img={image51} Title="Custom Bathrooms" Content="build fully custom bathrooms"/>
            <Card Img={image51} Title="Custom Living Areas" Content="build fully custom kitchens"/>
            <Card Img={image51} Title="Any Major Renovation" Content="build fully custom kitchens"/>
          </CardContainer>
        </ContainerItems>
      </ServicesContainer>
      <InfoDiv>
            <Head>Contact</Head>
            <Body>647-544-8925</Body>
            <Head>Address</Head>
            <Body>36 Carl Finlay Drive <br/>Brampton, Ontario L6R 1Y5 <br /> Canada</Body>
        </InfoDiv>
      </Content>
      )
}

const Content = styled.div`
  width:100%;
  max-width:1500px;
  margin: auto;
  padding-top:80px;
  min-height: 90vh;
  @media (max-width: 670px) {
    padding-top:80px;
    width:100%
  }


.each-slide > div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 500px;
  background-position: center;
  border-radius:2px;
  @media (max-width: 670px) {
    height: 250px;
  }
}

.each-slide span {
  padding: 20px;
  font-size: 20px;
  background: #921010;
  color:white;
  text-align: center;
}

.react-slideshow-container > button{
  display:none;
}

`;

const Title = styled.h1`
  padding-top: 10px;
`;

const SliderLink = styled(Link)`
  color:white;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  &:hover {
    color: white;
    background: #800707;

`;

const CardContainer = styled.div`
    display:flex;
    width:100%
    padding: 10px;
    gap:5%;
    flex-wrap: wrap;
    margin:auto;
    justify-content: space-around
`;


const Card = styled(CardImport)`
    width: 100%;
`;

const ServicesContainer = styled.div`
    margin:auto;
`;

const ContainerItems = styled.div`
    width:80%;
    margin:auto;
`;

const InfoDiv = styled.div`
  background: linear-gradient(0deg, rgba(0 0 0 / 70%), rgba(0 0 0 / 70%)), url(${image3});
  background-repeat:no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding:50px
  width:100%
  background-position: center center;
  @media (max-width: 670px) {
    width: 100%
    margin-top: 5px;
  }
`;

const Head = styled.h2`
  color: white;
`;

const Body = styled.p`
  color: white;
`;