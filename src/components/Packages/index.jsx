import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Title from '../Title';
import P from '../P';
import HR from '../HR';

const Packages = () => (
  <Section secondary>
    <Title>Tour Packages</Title>
    <P>
      We offer a variety of mountaineering packages. Whether you&apos;ve climbed
      Everest or don&apos;t even know what a mountain is, we&apos;ve got the perfect
      vacation for you.
    </P>
    <HR />
    <Grid>
      <GridItem>
        <H4>Guided Trips</H4>
        <P>
          Looking for the complete experience? Take a tour with one of our experts.
          They&apos;ll show you secrets that you&apos;re likely to miss otherwise.
        </P>
      </GridItem>
      <GridItem>
        <H4>Photo Trips</H4>
        <P>
          Want to experience nature&apos;s beauty without all of that annoying exercise?
          Take a photo tour on one of our mountain buses.
        </P>
      </GridItem>
      <GridItem>
        <H4>Biking Trips</H4>
        <P>
          If bicycles are more your speed, consider taking a tour through one of our mountain
          bike paths. We&apos;ll provide the bikes, and lunch too!
        </P>
      </GridItem>
      <GridItem>
        <H4>Racing Trips</H4>
        <P>
          Got a competitive spirit? Sign up for one of our mountain marathons!
          Try to reach the summit before anyone else.
        </P>
      </GridItem>
    </Grid>
  </Section>
);

export default Packages;

const H4 = styled.h4`
  font-size: 30px;
  text-align: center;
`;

const Grid = styled.ul`
  list-style-type: none;
  padding: 0;
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr fr;
  }
`;

const GridItem = styled.li`
  padding: 50px;
`;
