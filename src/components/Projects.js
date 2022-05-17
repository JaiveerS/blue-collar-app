import React from "react";
import styled from 'styled-components';
import Images from "./Import";


export default function Projects() {
    return (
      <Content>
        <Images/>
      </Content>
      )
}

const Content = styled.div`
  display:flex;
  width:80%;
  max-width:1250px;
  margin: auto;
  padding-top:85px;

  @media (max-width: 670px) {
    padding-top:80px;
    width:100%
  }
  
`;