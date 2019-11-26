import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => (
  <div className="aboutPage">
    <h2>What is Kronikles?</h2>
    <p>
      Kronikles is a note editor with a bit of a pirat-y edge, built with React for the frontend, and
      a server built in Node.
      <br/>
      This web app has been created by <strong>Valeria Ragonese</strong>, a lover of fantasy books
      and colorful websites.
    </p>
    <p>
      You can take a look at the code of these pages on Github:
      <div id="github-links">
        <a href="https://github.com/morwen80/Kronikles-frontend" target="_blank" rel="noopener noreferrer"><strong>Front End</strong></a> 
        <a href="https://github.com/morwen80/kronikles-server" target="_blank" rel="noopener noreferrer"><strong>Back End</strong></a>
      </div>
    </p>
    <h3>Get to know her</h3>

    <div id="social">
      <a href="https://github.com/morwen80" target="_blank" rel="noopener noreferrer" alt="Github page">
        <FontAwesomeIcon icon={['fab', 'github-alt']} />
      </a>

      <a href="https://www.linkedin.com/in/valeriaragonese/" target="_blank" rel="noopener noreferrer" alt="linkedIn profile">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>

      <a href="https://twitter.com/ValeriaRagonese" target="_blank" rel="noopener noreferrer" alt="twitter page">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>

      <a href="https://www.instagram.com/valeria.ragonese/" target="_blank" rel="noopener noreferrer" alt="instagram profile">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>




    </div>

  </div>
)

export default About
