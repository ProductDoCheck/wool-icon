import React from 'react';
import PropTypes from 'prop-types';

const ULockSlash = props => {
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
      <path d="M10.84 5.38A2 2 0 0114 7v3a1 1 0 001 1h1a1 1 0 011 1v.34a1 1 0 002 0V12a3 3 0 00-3-3V7a4 4 0 00-1.17-2.83 4.06 4.06 0 00-5.19-.39 1 1 0 001.2 1.6zm10.87 14.91l-18-18a1.004 1.004 0 00-1.42 1.42L7.62 9A3 3 0 005 12v6a3 3 0 003 3h8a3 3 0 002.39-1.2l1.9 1.91a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095zM16 19H8a1 1 0 01-1-1v-6a1 1 0 011-1h1.59l2.07 2.07A1 1 0 0011 14v2a1 1 0 002 0v-1.59l3.93 3.93A1 1 0 0116 19z"></path>
    </svg>
  );
};

ULockSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULockSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULockSlash;
