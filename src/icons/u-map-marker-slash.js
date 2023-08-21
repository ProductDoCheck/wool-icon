import React from 'react';
import PropTypes from 'prop-types';

const UMapMarkerSlash = props => {
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
      <path d="M10.63 5.49a6 6 0 017.21 7.2 1 1 0 00.74 1.21c.076.01.154.01.23 0a1 1 0 001-.76 8 8 0 00-9.61-9.62 1.026 1.026 0 10.46 2l-.03-.03zm11.08 14.58l-4.27-4.27L3.71 2.07a1 1 0 10-1.42 1.41L5.5 6.69A8 8 0 006.34 17l4.95 4.95a1.002 1.002 0 001.42 0l4-4 3.56 3.56a1 1 0 001.42-1.41l.02-.03zm-9.59-6.76a2 2 0 01-1.989-1.272A2 2 0 0110 11.21l2.12 2.1zm-.12 6.5l-4.24-4.24a6 6 0 01-.82-7.44L8.41 9.6a4 4 0 00.76 4.55A4.001 4.001 0 0012 15.33a3.93 3.93 0 001.73-.41l1.58 1.58L12 19.81z"></path>
    </svg>
  );
};

UMapMarkerSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMapMarkerSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMapMarkerSlash;
