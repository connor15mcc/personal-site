import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Connor McCarthy via email at connor15mcc@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Please feel free to reach out at <a href="mailto:connor15mcc@gmail.com">connor15mcc@gmail.com</a> or <a href="https://www.linkedin.com/in/connormccarthy15/">connect with me on LinkedIn.</a>
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
