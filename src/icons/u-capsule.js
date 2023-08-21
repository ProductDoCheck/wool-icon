import React from 'react';
import PropTypes from 'prop-types';

const UCapsule = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M19.5 4.5a5.12 5.12 0 00-7.24 0L4.5 12.26a5.12 5.12 0 107.24 7.24l7.76-7.76a5.12 5.12 0 000-7.24zm-9.18 13.59a3.21 3.21 0 01-4.41 0 3.13 3.13 0 010-4.41l3.18-3.18 4.41 4.41-3.18 3.18zm7.77-7.77l-3.18 3.18-4.41-4.41 3.18-3.18a3.12 3.12 0 014.41 4.41z"></path>
    </svg>
  );
};

UCapsule.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCapsule.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCapsule;
