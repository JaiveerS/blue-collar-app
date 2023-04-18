import React from "react";
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import image from '../images/gallery/1.jpg'
import imageRight from '../images/gallery/14.jpg'
import Iframe from 'react-iframe'



export default function Contact() {
  const test = 1;
  const form = useRef(test);

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm("service_rzc36h9", "template_70x8lqx", form.current, "V6jDmbnd0SyYm3ics")
      .then((result) => {
        form.current.reset();
        alert("Message Sent");
      }, (error) => {
        alert("Message failed to send.", error);
      });

  };

    return (
      <Container>
      <Content>
        <ContactForm ref={form} onSubmit={sendEmail}>
        <Title>Contact Us</Title>
          <FormGroup>
            <label>Name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </FormGroup>
          <FormGroup>
            <label >Message</label>
            <FormText
              type="message"
              name="message"
              id="message"
              placeholder="Message"
              rows="5"
              required
            />
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </ContactForm>
        <InfoDiv>
            <Head>Contact</Head>
            <Body>647-544-8925</Body>
            <Head>Address</Head>
            <Body>36 Carl Finlay Drive <br/>Brampton, Ontario L6R 1Y5 <br /> Canada</Body>
        </InfoDiv>
      </Content>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46077.95482003993!2d-79.74333246703041!3d43.79626535371957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b236b4d890ddf%3A0x2805e99a61ae1ac7!2sOntario%20Renovations!5e0!3m2!1sen!2sca!4v1652567083777!5m2!1sen!2sca" width='80%' height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
      {/* add map here */}
      </Container>  
      )
}

const Container =styled.div`
min-height: 85vh;
`;

const Content = styled.div`
  display:flex;
  width:80%;
  max-width:1000px;
  margin: auto;
  padding-top:85px;
  justify-content: center;
  column-gap: 0.1rem;
  @media (max-width: 670px) {
    padding-top:90px;
    flex-wrap: wrap;
    width:95%;
  }

`;

const Map = styled(Iframe)`
display: flex;
padding-top: 10px;
justify-content: center;
width:80%;
max-width:1000px;
margin: auto;
@media (max-width: 670px) {
  flex-wrap: wrap;
  max-width:100%;
}
`;

const Title = styled.h1`
  text-align:center;
  color:white;
`;

const ContactForm = styled.form`
  display:block;
  margin-bottom: none;
  width:60%
  background: linear-gradient(0deg, rgba(0 0 0 / 70%), rgba(0 0 0 / 70%)), url(${image});
  background-repeat:no-repeat;
  background-size: cover;
  border-radius: 10px
  padding:30px
  background-position: left center;
  @media (max-width: 670px) {
    width: 100%
  }
`;

const FormGroup = styled.div`
display:flex;
  input{
    position: relative;
    margin-bottom: 1rem;
    display: block;
    width: 100%;
    border: 2px solid #eee;
    padding: 1ch;
    border-radius: px;
    transition: 150ms ease;
    outline: none;
    font-size: 1rem;
    font-family: inherit;
  }

  label{
    display:none;
  }
`;

const FormText = styled.textarea`
  position: relative;
  margin-bottom: 1rem;
  display: block;
  width: 100%;
  border: 2px solid #eee;
  padding: 1ch;
  border-radius: 3px;
  transition: 150ms ease;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  height: 8em;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  background: #800707;
  border: none;
  border-radius: 3px;
  padding: 1ch;
  font-size: 1rem;
  color: #fff;
  font-family: inherit
  &:hover {
    background: #800707;
}
`;

const InfoDiv = styled.div`
  background: linear-gradient(0deg, rgba(0 0 0 / 70%), rgba(0 0 0 / 70%)), url(${imageRight});
  background-repeat:no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding:50px
  width:35%
  background-position: center center;
  @media (max-width: 670px) {
    width: 100%
    margin-top: 5px;
  }
`;

const Head = styled.h2`
  color: white;
`;

const Body = styled.p`
  color: white;
`;