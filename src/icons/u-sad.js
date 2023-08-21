import React from 'react';
import PropTypes from 'prop-types';

const USad = props => {
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
      <path d="M8.36 15.33a1 1 0 00.173 1.646.998.998 0 001.107-.116 3.76 3.76 0 014.72 0 1 1 0 00.64.23 1 1 0 00.64-1.76 5.81 5.81 0 00-7.28 0zm.85-4.79a1 1 0 001.41 0 1 1 0 000-1.41 3.08 3.08 0 00-4.24 0 1 1 0 101.41 1.41 1.001 1.001 0 011.42 0zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm5.62-10.87a3.08 3.08 0 00-4.24 0 1 1 0 001.41 1.41 1.002 1.002 0 011.42 0 1 1 0 001.41 0 1 1 0 000-1.41z"></path>
    </svg>
  );
};

USad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USad.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USad;