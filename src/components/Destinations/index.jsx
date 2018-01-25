import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Title from '../Title';
import P from '../P';
import HR from '../HR';
import mountain1 from '../../images/mountain1.jpg';
import mountain2 from '../../images/mountain2.jpg';
import mountain3 from '../../images/mountain3.jpg';
import mountain4 from '../../images/mountain4.jpg';

const Destinations = () => (
  <Section>
    <Title>Some Of Our Destinations:</Title>
    <P>
      Tired of the ocean? Are the plains too plain? Come along with us on one
      of our mountain adventures. Here are some pictures from people who have
      had elevated experiences with us.
    </P>
    <HR />
    <Images>
      <Img src={mountain1} large />
      <Img src={mountain2} />
      <Img src={mountain4} />
      <Img src={mountain3} large />
    </Images>
  </Section>
);


export default Destinations;

const Images = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 350px 350px 350px 350px;
  grid-gap: 40px;
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 350px 350px;
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 350px 350px;
  }
`;

const Img = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  grid-column: span 1;
  @media screen and (min-width: 1100px) {
    grid-column: span ${props => props.large ? 2 : 1};
  }
`;

