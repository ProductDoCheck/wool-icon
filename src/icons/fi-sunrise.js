import React from 'react';
import PropTypes from 'prop-types';

const FiSunrise = props => {
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
      <path d="M23 22H1"></path>
      <path d="M21 18h2"></path>
      <path d="M1 18h2"></path>
      <path d="M17 18a5 5 0 10-10 0"></path>
      <path d="M18.36 11.64l1.42-1.42"></path>
      <path d="M4.22 10.22l1.42 1.42"></path>
      <path d="M12 2v7"></path>
      <path d="M8 6l4-4 4 4"></path>
    </svg>
  );
};

FiSunrise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiSunrise.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiSunrise;
