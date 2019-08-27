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
import SocialIcons, { EmailIcon } from './SocialIcons';

const BodyTextWrapper = styled.section`
  ${fontSize}
  .email {
    text-align: center;
  }
  div {
    text-align: center;
    ${space}
  }
`;

const ContactButton = styled.a`
  align-items: center;
  margin: auto;
  font-family: 'Ubuntu', sans-serif;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  line-height: 1.25;
  white-space: nowrap;
  background-size: 2rem 2rem;
  border-radius: 4px;
  border-width: 4px;
  border-style: solid;
  border-color: ${props => props.theme.colors.primary};
  box-shadow: 0 15px 35px hsla(0, 0%, 0%, 0.2);
  text-decoration: none;
  padding: 0.75rem 1rem;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background-color: white;
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactWrapper = styled.div(space);

const BodyText = () => (
  <BodyTextWrapper fontSize={[1]}>
    <p>
      I recently moved to Melbourne, Australia. I am open to interesting
      freelance and full-time work opportunities.
    </p>
    <p>
      I have experience working with <a href="https://reactjs.org/">React</a>⚛️
      and <a href="https://vuejs.org/">VueJS</a> on the frontend, and NodeJS &
      GraphQL on the backend.
    </p>
    <p>
      Feel free to check out my work and contact me on your social network of
      choice:
    </p>
    <SocialIcons />
    <ContactWrapper mt={[5, 6]}>
      <p>Not into social networks? Then, just contact me:</p>
      <ContactButton href="mailto:pol.milian.dev@gmail.com">
        Get in touch
      </ContactButton>
    </ContactWrapper>
  </BodyTextWrapper>
);

export default BodyText;
