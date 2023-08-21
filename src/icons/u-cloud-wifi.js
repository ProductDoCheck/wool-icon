import React from 'react';
import PropTypes from 'prop-types';

const UCloudWifi = props => {
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
      <path d="M8.5 5.94a7.1 7.1 0 017 0 1 1 0 101-1.73 9.14 9.14 0 00-9 0 1 1 0 101 1.73zm9.92 5.27a5.91 5.91 0 00-.36-.71 1 1 0 00-1.71 1.04c.155.267.282.548.38.84a1 1 0 00.78.67A3 3 0 0120 16a3 3 0 01-3 3H5.66A2 2 0 014 17.4 2 2 0 016 15a1 1 0 001-1 4.92 4.92 0 01.67-2.49 1 1 0 00-1.126-1.465 1 1 0 00-.604.465 6.75 6.75 0 00-.88 2.6 4 4 0 00-2.13 1.33A4 4 0 005.46 21H17a5 5 0 001.42-9.79zM14.87 9v-.06a.922.922 0 00.13-.2 1 1 0 00-.57-1.29 6.36 6.36 0 00-1.74-.38h-.3a5.47 5.47 0 00-.81 0 2.996 2.996 0 00-.31 0 6.36 6.36 0 00-1.74.38A1 1 0 009 8.74c.034.067.074.13.12.19a.61.61 0 000 .11 1 1 0 001.37.36 3.08 3.08 0 013 0 1 1 0 001.38-.4zM11 12a1 1 0 101.999 0A1 1 0 0011 12z"></path>
    </svg>
  );
};

UCloudWifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudWifi.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudWifi;
