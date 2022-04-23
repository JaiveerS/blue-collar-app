import React from "react";
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function Contact() {
  const test = 1;
  const form = useRef(test);

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm("service_rzc36h9", "template_70x8lqx", form.current, "V6jDmbnd0SyYm3ics")
      .then((result) => {
        form.current.reset();
        alert("Message Sent", result.status, result.text);
      }, (error) => {
        alert("Message failed to send.", error);
      });

  };

    return (
      <Content>
        <ContactForm ref={form} onSubmit={sendEmail}>
        <Title>Contact Us</Title>
          {/* <!-- name --> */}
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

          {/* <!-- email --> */}
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
      </Content>
      )
}

const Content = styled.div`
  display:flex;
  width:80%;
  max-width:1000px;
  margin: auto;
  display: flex;
  min-height: 100vh;
  padding-top: 80px;
  justify-content: center;
`;

const Title = styled.h1`
  text-align:center;
`;

const ContactForm = styled.form`
  display:block;

`;

const FormGroup = styled.div`
  input{
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
  }

  label{
    position: absolute;
    top: 1ch;
    left: 1ch;
    pointer-events: none;
    transition: 150ms ease;
    color: #888;
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
  background-color: #e14;
  border: none;
  border-radius: 3px;
  padding: 1ch;
  font-size: 1rem;
  color: #fff;
  font-family: inherit
`;