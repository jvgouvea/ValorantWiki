import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonLink = ({ text, link, type, alignment }) => {
  const styleMap = {
    red: 'red',
    white: 'white',
  };

  const getButtonClasses = () => {
    let classes = 'button-see-moore';

    if (styleMap[type]) {
      classes += ` ${styleMap[type]}`;
    }

    return classes;
  };

  return (
    <div className='button-see-moore_container'>
      <button className={getButtonClasses()}>
        <Link to={link}>{text}</Link>
      </button>
    </div>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['red', 'white']).isRequired,
};

export default ButtonLink;
