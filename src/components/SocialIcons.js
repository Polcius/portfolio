import React from 'react';
// Icon files
import TwitterIcon from '../images/svg/twitter-icon.svg';
import GitHubIcon from '../images/svg/github-icon.svg';
import LinkedInIcon from '../images/svg/linkedin-icon.svg';
import EmailIconPNG from '../images/mail-icon.png';

export const EmailIcon = () => (
  <div>
    <img src={EmailIconPNG} alt="Email icon" />
  </div>
);

const SocialIcons = () => (
  <section className="text-center mt-8">
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
