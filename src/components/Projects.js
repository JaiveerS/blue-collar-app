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
  width:100%;
  max-width:1000px;
  margin: auto;
  padding-top: 100px;
  
`;