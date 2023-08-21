import React from 'react';
import PropTypes from 'prop-types';

const UAndroidPhoneSlash = props => {
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
      <path d="M11.29 17.71a1.002 1.002 0 001.42 0 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1.15 1.15 0 00-.21-.33 1.002 1.002 0 00-1.42 0 1.15 1.15 0 00-.21.33.94.94 0 000 .76c.05.121.122.233.21.33zM8.66 4H16a1 1 0 011 1v7.34a1 1 0 002 0V5a3 3 0 00-3-3H8.66a1 1 0 000 2zm13.05 16.29l-18-18a1.004 1.004 0 00-1.42 1.42L5 6.41V19a3 3 0 003 3h8a3 3 0 002.76-1.83l1.53 1.54a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095zM17 19a1 1 0 01-1 1H8a1 1 0 01-1-1V8.41l10 10V19z"></path>
    </svg>
  );
};

UAndroidPhoneSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAndroidPhoneSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAndroidPhoneSlash;
