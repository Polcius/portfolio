import React from 'react';
import SocialIcons from './SocialIcons';

const BodyText = () => (
  <section className="text-2xl leading-snug">
    <p>
      I am livng beautiful Melbourne🦘, currently open to interesting freelance
      and full-time work opportunities in the area or remote-based.
    </p>
    <p>
      In the past months I worked for{' '}
      <a href="https://clemengerbbdo.com.au/en/work">Clemenger BBDO</a> where we
      built a <a href="https://www.nativescript.org/">NativeScript</a>{' '}
      iOS/Android app for a top-tier client. I recently finished up at{' '}
      <a href="https://revium.com.au/">Revium</a>, where we developed a
      responsive website in VueJS pulling data from a{' '}
      <a href="https://www.kentico.com/">Kentico</a> backend.
    </p>
    <p>
      I have experience working with <a href="https://reactjs.org/">React </a>
      and <a href="https://vuejs.org/">VueJS</a> on the frontend, and{' '}
      <a href="https://nodejs.org/en/about/">NodeJS</a> &{' '}
      <a href="https://graphql.org/">GraphQL</a> on the backend.
    </p>
    <p>
      Feel free to check out my work and contact me on your social network of
      choice:
    </p>
    <SocialIcons />
    <article className="text-center">
      <p>Not into social networks? Then, just shoot me an e-mail:</p>
      <a
        className="button font-display my-4"
        href="mailto:pol.milian.dev@gmail.com"
      >
        Get in touch
      </a>
    </article>
  </section>
);

export default BodyText;
