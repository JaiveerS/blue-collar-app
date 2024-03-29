import React from "react";
import styled from 'styled-components';

export default function Import() {
  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg)$/));

  const pics = images.map(image =>
    <Picture key={image} src={image} loading="lazy "alt="renovation"/>
  )

    return (
      <Container>
        {pics}
      </Container>
      )
}

const Container = styled.div`
    display: grid;
    grid-gap: 2.5px;
    grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
    @media (max-width: 670px) {
      max-width:100%;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    }

`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 670px) {
    max-width:100%;
  }
`;
