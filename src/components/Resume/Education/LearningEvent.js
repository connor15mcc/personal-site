import React from 'react';
import PropTypes from 'prop-types';

const LearningEvent = ({ data }) => (
  <article className="learning-container">
    <header>
      <h4><a href={data.link}>{data.institute}</a> - {data.topic}</h4>
      <p className="daterange">{data.daterange}</p>
    </header>
    <ul className="desc">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

LearningEvent.propTypes = {
  data: PropTypes.shape({
    topic: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
  }).isRequired,
};

export default LearningEvent;
