import React from 'react';
import PropTypes from 'prop-types';

const UCloudSlash = props => {
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
      <path d="M16.71 16.29l-13-13a1.004 1.004 0 00-1.42 1.42l3.36 3.35a7 7 0 00-.59 2A4 4 0 006 18h9.59l2.7 2.71a1 1 0 001.42 0 1.002 1.002 0 000-1.42l-3-3zM6 16a2 2 0 110-4 1 1 0 001-1 5 5 0 01.2-1.39L13.59 16H6zm12.42-7.78A7 7 0 0012 4a6.74 6.74 0 00-2.32.4 1 1 0 00.66 1.88A4.91 4.91 0 0112 6a5 5 0 014.73 3.39 1 1 0 00.78.67 3 3 0 011.85 4.79 1 1 0 00.78 1.62 1 1 0 00.78-.38 5 5 0 00-2.5-7.87z"></path>
    </svg>
  );
};

UCloudSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudSlash;
