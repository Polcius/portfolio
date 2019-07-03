import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import SocialIcons from './SocialIcons';

const BodyTextWrapper = styled.section``;

const BodyText = () => (
  <BodyTextWrapper>
    <p>I am living and working in Melbourne, Australia. </p>
    <p>Feel free to contact me on your social network of choice:</p>
    <SocialIcons />
  </BodyTextWrapper>
);

export default BodyText;
