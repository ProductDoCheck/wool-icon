import React from 'react';
import PropTypes from 'prop-types';

const UBellSlash = props => {
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
      <path d="M11.07 6.12A3.48 3.48 0 0112 6a4 4 0 014 4v1.34a1 1 0 002 0V10a6 6 0 00-5-5.91V3a1 1 0 00-2 0v1.1l-.45.08a1.004 1.004 0 10.52 1.94zm10.64 14.17l-18-18a1.004 1.004 0 10-1.42 1.42l4.12 4.11A6 6 0 006 10v3.18A3 3 0 004 16v2a1 1 0 001 1h3.14a4 4 0 007.72 0h1.73l2.7 2.71a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095zM8 10a3.31 3.31 0 010-.55L11.59 13H8v-3zm4 10a2 2 0 01-1.72-1h3.44A2 2 0 0112 20zm-6-3v-1a1 1 0 011-1h6.59l2 2H6z"></path>
    </svg>
  );
};

UBellSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBellSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBellSlash;
