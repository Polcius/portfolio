import React from 'react';
// Icon files
import TwitterIcon from '../images/svg/twitter-icon.svg';
import GitHubIcon from '../images/svg/github-icon.svg';
import LinkedInIcon from '../images/svg/linkedin-icon.svg';

const SocialIcons = () => (
  <section className="flex flex-col items-center md:flex-row justify-center text-center mt-8 mb-16">
    <a href="https://twitter.com/E_L_Pol" rel="noopener noreferrer">
      <TwitterIcon className="px-2" width="96px" height="96px" />
    </a>
    <a href="https://github.com/Polcius" rel="noopener noreferrer">
      <GitHubIcon className="px-2" width="96px" height="96px" />
    </a>
    <a
      href="https://www.linkedin.com/in/pol-milian-707a214b/"
      rel="noopener noreferrer"
    >
      <LinkedInIcon className="px-2" width="96px" height="96px" />
    </a>
  </section>
);

export default SocialIcons;
