import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about some of my projects!"
  >
    <header>
      <div className="title">
        <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
        <p>Here are some of the projects that I&apos;ve been working on recently...</p>
      </div>
    </header>
    <article className="post project" id="projects">
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
