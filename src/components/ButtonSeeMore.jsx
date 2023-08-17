import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonSeeMore = ({ text, link, type, margin }) => {
  const styleMap = {
    red: 'red',
    white: 'white',
  };

  const linkStyle = {
    margin: margin,
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
      <button>
        <Link style={linkStyle} className={getButtonClasses()} to={link}>{text}</Link>
      </button>
    </div>
  );
};

ButtonSeeMore.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['red', 'white']).isRequired,
  margin: PropTypes.string
};

export default ButtonSeeMore;
