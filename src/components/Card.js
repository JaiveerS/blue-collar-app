import React from "react";
import styled from 'styled-components';


export default function Card(Prop) {
    return (
        <CardContainer>
            <Img src={Prop.Img}></Img>
            <Title>{Prop.Title}</Title>
            {/* <Content>{Prop.Content}</Content> */}
        </CardContainer>
    )
}

const CardContainer = styled.div`
    background:#800707;
    border-radius: 20px;
    padding:10px;
    max-width:300px;
    max-height:400px;
    margin-top: 20px;
`;

const Title = styled.h1`
    text-align:center;
    color:white;;
`;

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    border-radius:10px;
`;

// const Content = styled.p`
//     text-align:center;
//     color:#800707;
// `;
