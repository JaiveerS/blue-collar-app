import React from "react";
import styled from 'styled-components';
import Images from "./Import";
import InfiniteScroll from 'react-infinite-scroll-component';


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