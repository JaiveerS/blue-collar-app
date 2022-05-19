import React from "react";
import styled from 'styled-components';


export default function Info() {
    return(
        <Container>
            <Phone>Phone:416-123-456Location:Ontario,Canada</Phone>
            <Divider/>
        </Container>
    )
}


const Container = styled.div`
    padding-left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    flex-wrap: wrap;
    line-height:0;
    @media (max-width: 670px) {
        padding-left:0px;
    }
`;

const Phone = styled.p`
    padding-top:20px;
    padding-bottom:-10px;
    color:white;
`;

const Divider = styled.hr`
    border-top: 1px solid white;
    border-radius: 5px;
    width:100%;
    opacity:100;
    @media (max-width: 670px) {
        margin-left: -30px;
        width:200%;
    }
`;