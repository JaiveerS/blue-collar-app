import React from "react";
import styled from 'styled-components';

export default function Import() {
  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg)$/));

  const pics = images.map(image =>
    <Picture key={image} src={image} alt="renovation"/>
  )

    return (
      <Container>
        {pics}
      </Container>
      )
}

const Container = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));


`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
