import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Wrapper>
    <Heading>
      Mountain Travel
    </Heading>
    <Nav>
      <NavLink>Tours</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </Nav>
  </Wrapper>
);

export default Header;

const Heading = styled.h2`
  font-size: 26px;
  font-weight: 100;
  color: white;
`;

const Wrapper = styled.header`
  width: 100%;
  position: absolute;
  padding: 20px 30px;
  opacity: 0;
  animation: 1s fadein 1 ease-in forwards 500ms;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.7;
    }
  }
`;

const Nav = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
`;
