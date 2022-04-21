import React from "react";
import styled from 'styled-components';

export default function Home() {
    return (
      <Content>
        <h1>THIS IS THE HOME PAGE!!!</h1>
      </Content>
      )
}

const Content = styled.div`
  display:flex;
  width:80%;
  max-width:1000px;
  margin: auto;
  padding-top: 80px;
`;