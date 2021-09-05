import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Connor McCarthy's personal website. This is all to be filled in (TODO)"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Connor McCarthy</Link></h2>
          <p>
            Hi! I&apos;m a junior studying Computer Science at Cornell University&apos;s
            College of Engineering seeking industry experience.
          </p>
        </div>
      </header>
      <p> Check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
