import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, tag = 'h1', fontSize = '36px', fontWeight = '500', color = '', margin }) => {
  const titleStyle = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    margin: margin,
  };

  const Tag = tag; // tag passada como prop

  return <Tag className={`title ${color}`} style={titleStyle}>{text}</Tag>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  tag: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default Title;
