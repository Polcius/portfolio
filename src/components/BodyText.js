import React from 'react';
import SocialIcons from './SocialIcons';
import DownloadIcon from '../images/svg/cloud-storage.svg';
import EmailIcon from '../images/svg/email.svg';

const BodyText = () => (
  <section className="text-2xl leading-snug">
    <p>
      I am living beautiful Melbourne🦘, currently open to interesting freelance
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
      I have extensive experience working with modern JavaScript frameworks such
      as <a href="https://reactjs.org/">React </a>
      and <a href="https://vuejs.org/">VueJS</a> on the frontend, as well as
      using <a href="https://nodejs.org/en/about/">NodeJS</a> &{' '}
      <a href="https://graphql.org/">GraphQL</a> to generate APIs.
    </p>
    <p>
      Feel free to check out my work and contact me on your social network of
      choice:
    </p>
    <SocialIcons />
    <article className="text-center mt-8 mb-16">
      <p>Not into social networks? Then, just shoot me an e-mail:</p>
      <a
        className="button font-display my-4"
        href="mailto:pol.milian.dev@gmail.com"
      >
        <EmailIcon className="fill-current mr-2" width="24px" height="24px" />
        Get in touch
      </a>
    </article>
    <article className="text-center mt-8 mt-16">
      <p>Thanks for visiting! Feel free to download a PDF of my CV:</p>
      <a
        className="button font-display my-4"
        href="https://polmilian.s3.amazonaws.com/Pol_Milian_Resume_October.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DownloadIcon
          className="fill-current mr-2"
          width="24px"
          height="24px"
        />
        Download CV
      </a>
    </article>
  </section>
);

export default BodyText;
