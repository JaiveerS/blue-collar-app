import React from "react";
import styled from 'styled-components';

export default function Home() {
    return (
      <Content>
        <h1>Specialize In Legal Basements!</h1>
      </Content>
      )
}

const Content = styled.div`
  display:flex;
  width:80%;
  max-width:1000px;
  margin: auto;
  padding-top:110px;
  @media (max-width: 670px) {
    padding-top:120px;
  }

`;