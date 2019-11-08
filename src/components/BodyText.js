import React, { useRef, useEffect } from 'react';
import { TweenMax, Sine, TimelineLite } from 'gsap/TweenMax';
import SocialIcons from './SocialIcons';
import DownloadIcon from '../images/svg/cloud-storage.svg';

const BodyText = () => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          const tl = new TimelineLite();

          TweenMax.set('.test', {
            opacity: 0,
          });
          TweenMax.set('#top', {
            y: -100,
          });
          tl.staggerTo(
            '.test',
            1,
            {
              opacity: 1,
              ease: Sine.easeOut,
            },
            0.2
          ).to(
            '#top',
            0.5,
            {
              y: 0,
            },
            '-=0.7'
          );
          // console.log('It works!');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <section className="text-2xl leading-snug">
      <p>
        I am living beautiful Melbourne🦘, currently open to interesting
        freelance and full-time work opportunities in the area or remote-based.
      </p>
      <p>
        In the past months I worked for{' '}
        <a href="https://clemengerbbdo.com.au/en/work">Clemenger BBDO</a> where
        we built a <a href="https://www.nativescript.org/">NativeScript</a>{' '}
        iOS/Android app for a top-tier client. I recently finished up at{' '}
        <a href="https://revium.com.au/">Revium</a>, where we developed a
        responsive website in VueJS pulling data from a{' '}
        <a href="https://www.kentico.com/">Kentico</a> backend.
      </p>
      <p>
        I have extensive experience working with modern JavaScript frameworks
        such as <a href="https://reactjs.org/">React </a>
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
          <svg
            ref={ref}
            className="fill-current mr-2"
            width="24px"
            height="24px"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="top"
              className="test"
              d="M467 61H45C38.073 61 31.588 62.703 25.721 65.51L255 294.789L306.389 245.402C306.389 245.402 306.393 245.397 306.394 245.395C306.395 245.393 306.399 245.391 306.399 245.391L486.286 65.514C480.418 62.705 473.929 61 467 61Z"
            />
            <path
              className="test"
              d="M507.496 86.728L338.213 256.002L507.49 425.279C510.297 419.412 512 412.927 512 406V106C512 99.077 510.301 92.593 507.496 86.728Z"
            />
            <path
              className="test"
              d="M4.51 86.721C1.703 92.588 0 99.073 0 106V406C0 412.923 1.701 419.409 4.506 425.274L173.789 256L4.51 86.721Z"
            />
            <path
              className="test"
              d="M317.002 277.213L265.606 326.606C262.676 329.536 258.838 331.001 255.001 331.001C251.164 331.001 247.325 329.536 244.396 326.606L195 277.211L25.714 446.486C31.582 449.295 38.071 451 45 451H467C473.927 451 480.412 449.297 486.279 446.49L317.002 277.213Z"
            />
          </svg>
          Get in touch
        </a>
      </article>
      <article className="text-center mt-8 mt-16">
        <p>Thanks for visiting! Feel free to download a PDF of my CV:</p>
        <a
          className="button font-display my-4"
          href="https://polmilian.s3.amazonaws.com/Pol_Milian_CV.pdf"
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
};

export default BodyText;
