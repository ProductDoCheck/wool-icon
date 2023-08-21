import React from 'react';
import PropTypes from 'prop-types';

const FiAperture = props => {
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M14.31 8l5.74 9.94"></path>
      <path d="M9.69 8h11.48"></path>
      <path d="M7.38 12l5.74-9.94"></path>
      <path d="M9.69 16L3.95 6.06"></path>
      <path d="M14.31 16H2.83"></path>
      <path d="M16.62 12l-5.74 9.94"></path>
    </svg>
  );
};

FiAperture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiAperture.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiAperture;
