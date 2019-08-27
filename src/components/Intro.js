import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from 'styled-system';

const IntroWrapper = styled.section`
  font-family: 'Ubuntu', sans-serif;
  span {
    color: ${props => props.theme.colors.primary};
  }
  margin-bottom: 2rem;
  ${color}
  ${fontSize}
`;

const Intro = () => (
  <IntroWrapper color="darkBlack" fontSize={[2, 3, 4]}>
    <p>
      👋Hi! I’m <span>Pol.</span> A Full-Stack Engineer from Barcelona.{' '}
      <span>Nice to meet you!</span>
    </p>
  </IntroWrapper>
);

export default Intro;
