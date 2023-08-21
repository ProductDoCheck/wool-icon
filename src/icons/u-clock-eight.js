import React from 'react';
import PropTypes from 'prop-types';

const UClockEight = props => {
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
      <path d="M11 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a1 1 0 00-1 1v4.42l-2.1 1.21a1 1 0 00.5 1.87 1 1 0 00.5-.13l2.6-1.5.09-.09.16-.13a.863.863 0 00.1-.16.891.891 0 00.08-.17.65.65 0 00.05-.2L12 12V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UClockEight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClockEight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClockEight;
