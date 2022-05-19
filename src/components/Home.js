import React from "react";
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../images/gallery/34.jpg'
import image2 from '../images/gallery/2.jpg'
import image3 from '../images/gallery/14.jpg'


const slideImages = [
  {
    image: {src:image1},
    caption: 'Get A FREE ESTIMATE NOW!'
  },
  {
    image: {src:image2},
    caption: 'Specialize In Legal Basements!'
  },
  {
    image: {src:image3},
    caption: 'Specialize In Legal Basements!'
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
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
        <Title>Specialize In Legal Basements!</Title>
      </Content>
      )
}

const Content = styled.div`
  width:100%;
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
`;
