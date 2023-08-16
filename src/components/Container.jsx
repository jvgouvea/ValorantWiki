import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, customClass = '' }) => {
  return <section className={`container ${customClass}`}>{children}</section>;
};

Container.propTypes = {
  customClass: PropTypes.string,
};

export default Container;
