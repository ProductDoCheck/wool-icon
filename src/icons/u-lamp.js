import React from 'react';
import PropTypes from 'prop-types';

const ULamp = props => {
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
      <path d="M18 2.78A1 1 0 0017 2H7a1 1 0 00-1 .78l-2 9A1 1 0 005 13h3.94a8.92 8.92 0 01-2.51 7.3 1 1 0 00.71 1.7h9.72a1 1 0 00.71-1.7 8.92 8.92 0 01-2.51-7.3H16v2a1 1 0 002 0v-2h1a1 1 0 00.98-1.22l-1.98-9zM9.22 20A10.9 10.9 0 0011 14c0-.33 0-.67-.05-1h2.1c0 .33-.05.67-.05 1a10.9 10.9 0 001.78 6H9.22zm-3-9L7.8 4h8.4l1.55 7H6.22z"></path>
    </svg>
  );
};

ULamp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULamp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULamp;
