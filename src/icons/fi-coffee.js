import React from 'react';
import PropTypes from 'prop-types';

const FiCoffee = props => {
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
      <path d="M18 8h1a4 4 0 110 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path>
      <path d="M14 1v3"></path>
      <path d="M10 1v3"></path>
      <path d="M6 1v3"></path>
    </svg>
  );
};

FiCoffee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCoffee.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCoffee;
