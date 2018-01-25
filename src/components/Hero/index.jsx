import React from 'react';
import styled from 'styled-components';
import mainPng from '../../images/main.jpg';
import Section from '../Section';

const Hero = () => (
  <Wrapper>
    <Content>
      <H1>Mountain Travel</H1>
      <H3>Unmissable Adventure Tours Around The World</H3>
      <Button>Contact Us Now</Button>
    </Content>
  </Wrapper>
);

export default Hero;

const Wrapper = Section.extend`
  background-image: url(${mainPng});
  background-size: cover;
  min-height: 600px;
  @media screen and (min-width: 800px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: 1s fly-in 1 forwards ease-out 1s;

  @keyframes fly-in {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 50px;
  font-weight: 100;
  color: white;
  @media screen and (min-width: 800px) {
    font-size: 60px;
  }
`;

const H3 = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-size: 26px;
  font-weight: 100;
  color: white;
  @media screen and (min-width: 800px) {
    font-size: 35px;
  }
`;

const Button = styled.a`
  text-align: center;
  background-color: #3f51b5;
  max-width: 250px;
  padding: 20px 40px;
  border-radius: 5px;
  text-transform: UPPERCASE;
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
