import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Connor McCarthy</h2>
        <p><a href="mailto:connor15mcc@gmail.com">connor15mcc@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, my name&apos;s Connor.
        I&apos;m a current junior studying Computer Science at Cornell University’s
        College of Engineering seeking industry experience.
        I&apos;m especially passionate about building complex software and in the
        intersection of software engineering and data analysis.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Connor McCarthy | <Link to="https://connormccarthy.org/">connormccarthy.org</Link>.</p>
    </section>
  </section>
);

export default SideBar;
