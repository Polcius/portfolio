import React from 'react';
import { useSpring, animated } from 'react-spring';
import SocialIcons, { EmailIcon } from './SocialIcons';

const BodyText = () => (
  <section>
    <p>
      I recently moved to beautiful Melbourne, in Australia. I am open to
      interesting freelance and full-time work opportunities in the area or
      remote-based.
    </p>
    <p>
      I have experience working with <a href="https://reactjs.org/">React</a>⚛️
      and <a href="https://vuejs.org/">VueJS</a> on the frontend, and{' '}
      <a href="https://nodejs.org/en/about/">NodeJS</a> &{' '}
      <a href="https://graphql.org/">GraphQL</a> on the backend.
    </p>
    <p>
      Feel free to check out my work and contact me on your social network of
      choice:
    </p>
    <SocialIcons />
    <article>
      <p>Not into social networks? Then, just shoot me an e-mail:</p>
      <a href="mailto:pol.milian.dev@gmail.com">Get in touch</a>
    </article>
  </section>
);

export default BodyText;
