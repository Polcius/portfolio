import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const IntroWrapper = styled.section`
  font-family: 'Ubuntu', sans-serif;
  font-size: 36px;
  color: ${props => props.theme.darkBlack};
  span {
    color: ${props => props.theme.primary};
  }
  margin-bottom: 2rem;
`;



const Intro = () => (
  <IntroWrapper>
    Hi, I’m <span>Pol.</span> A Full-Stack Web/UI Engineer.{' '}
    <span>Nice to meet you!</span>
    
  </IntroWrapper>
);

export default Intro;
