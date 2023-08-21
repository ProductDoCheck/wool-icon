import React from 'react';
import PropTypes from 'prop-types';

const USilence = props => {
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
      <path d="M9 11a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm1 3a1 1 0 00-2 0h-1a1 1 0 00-2 0h-1a1 1 0 10-2 0 1 1 0 000 2 1 1 0 102 0h1a1 1 0 002 0h1a1 1 0 002 0 1 1 0 000-2zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

USilence.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USilence.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USilence;
