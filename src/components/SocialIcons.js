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
// Icon files
import TwitterIcon from '../images/svg/twitter-icon.svg';
import GitHubIcon from '../images/svg/github-icon.svg';
import LinkedInIcon from '../images/svg/linkedin-icon.svg';
import EmailIconPNG from '../images/mail-icon.png';

const SocialIconsWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
  svg {
    padding: 0 0.5rem;
  }
`;

export const EmailIcon = () => (
  <div css="text-align: center;">
    <img src={EmailIconPNG} alt="Email icon" />
  </div>
);

const SocialIcons = () => (
  <SocialIconsWrapper>
    <a href="https://twitter.com/E_L_Pol" rel="noopener noreferrer">
      <TwitterIcon width="96px" height="96px" />
    </a>
    <a href="https://github.com/Polcius" rel="noopener noreferrer">
      <GitHubIcon width="96px" height="96px" />
    </a>
    <a
      href="https://www.linkedin.com/in/pol-milian-707a214b/"
      rel="noopener noreferrer"
    >
      <LinkedInIcon width="96px" height="96px" />
    </a>
  </SocialIconsWrapper>
);

export default SocialIcons;
