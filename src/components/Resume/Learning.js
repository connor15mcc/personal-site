import React from 'react';
import PropTypes from 'prop-types';

import LearningEvent from './Education/LearningEvent';

const Learning = ({ data }) => (
  <div className="learning">
    <div className="link-to" id="otherlearning" />
    <div className="title">
      <h3>Other Learning</h3>
    </div>
    {data.map((learningEvent) => (
      <LearningEvent
        data={learningEvent}
        key={learningEvent.topic}
      />
    ))}
  </div>
);

Learning.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    topic: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
  })),
};

Learning.defaultProps = {
  data: [],
};

export default Learning;
