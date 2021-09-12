import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{data.link != null ? <a href={data.link}>{data.title}</a> : data.title}</h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      {data.link != null
        ? (
          <a href={data.link} className="linkedImage">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          </a>
        )
        : (
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          </div>)}
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
