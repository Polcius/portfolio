import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
// Icon files
import TwitterIcon from '../images/svg/twitter-icon.svg';
import GitHubIcon from '../images/svg/github-icon.svg';
import LinkedInIcon from '../images/svg/linkedin-icon.svg';

const SocialIconsWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
  svg {
    padding: 0 0.5rem;
  }
`;

const SocialIcons = () => (
  <SocialIconsWrapper>
    <TwitterIcon />
    <GitHubIcon />
    <LinkedInIcon />
  </SocialIconsWrapper>
);

export default SocialIcons;
