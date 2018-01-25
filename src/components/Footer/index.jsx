import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <P>Images courtesy of <Link href="https://www.unsplash.com">Unsplash</Link></P>
    <P>Why are you even reading this?! There&apos;s never anything interesting in the footer!</P>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.footer`
  font-size: 15px;
  color: white;
  padding: 20px 0;
  height: 150px;
  background-color: #607d8b;
  text-transform: Uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1100px) {
    height: auto;
    flex-direction: row;
  }
`;

const P = styled.p`
  opacity: 0.6;
`;

const Link = styled.a`
  opacity: 0.75;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.6;
  }
`;
