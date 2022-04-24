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
        <h2>Specialize In Legal Basements</h2>
        <h3>We Do It All </h3>
        <h4>From:</h4>
        <h4>obtaining building permits & preparing architectural drawings</h4>
        <img src={drawing1} loading="lazy "alt="architectural drawings" width="50%"/>
        <img src={drawing2} loading="lazy "alt="architectural drawings" width="50%"/>
        <h4>booking inspections</h4>
        <h3>Digging Legal below grade entrances</h3>
        <img src={belowgrade1} loading="lazy "alt="below grade entrance" width="50%"/>
        <img src={belowgrade2} loading="lazy "alt="below grade entrance" width="50%"/>
        <img src={belowgrade3} loading="lazy "alt="below grade entrance" width="50%"/>
        <img src={belowgrade4} loading="lazy "alt="below grade entrance" width="50%"/>
        <h4>framing</h4>
        <h4>plumbing</h4>
        <h4>all living area neccesities like</h4>
        <h3>Kitchens</h3>
        <h3>Bathrooms</h3>
        <h3>Living Room</h3>
        
        <h3>Aswell as Major House Renovations</h3>

        <p>insert images here showing additonal services</p>
        <h4>Give us a call for a free estimae</h4>
        <h5>CARD OF CONTACT INFORMATION</h5>
      </Content>
      )
}

const Content = styled.div`

  width:80%;
  max-width:1000px;
  margin: auto;
  padding-top:110px;
  min-height: 90vh;
  @media (max-width: 670px) {
    padding-top:120px;
  }
`;