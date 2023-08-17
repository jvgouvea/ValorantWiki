import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '../components/Container';

const Banner = ({ title, paragraphText, buttonText, buttonLink, imageSrc }) => {
  return (
    <Container>
      <div className="banner">
        <div className="banner_content">
          <h2 className='banner_content__title'>{title}</h2>
          <p className='banner_content__paragraph'>{paragraphText}</p>
          <Link className='banner_content__button' to={buttonLink}>{buttonText}</Link>
        </div>
        <img className='banner_image' src={imageSrc} alt="Banner Valorant" />
      </div>
    </Container>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Banner;
