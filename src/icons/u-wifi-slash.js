import React from 'react';
import PropTypes from 'prop-types';

const UWifiSlash = props => {
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
      <path d="M6.92 5.51L3.71 2.29a1.004 1.004 0 10-1.42 1.42L4.56 6A15.21 15.21 0 001.4 8.39a1 1 0 000 1.41 1 1 0 00.71.3 1 1 0 00.7-.29 13.07 13.07 0 013.24-2.35L7.54 9a10.78 10.78 0 00-3.32 2.27 1 1 0 101.42 1.4 8.8 8.8 0 013.45-2.12l1.62 1.61a7.071 7.071 0 00-3.66 1.94 1 1 0 101.42 1.4A5 5 0 0112 14c.211 0 .422.017.63.05l7.66 7.66a.999.999 0 001.42 0 1 1 0 000-1.42L6.92 5.51zM12 16A3 3 0 1012 22 3 3 0 0012 16zm0 4a1 1 0 110-2 1 1 0 010 2zM22.61 8.39A15 15 0 0010.29 4.1a1.006 1.006 0 00.22 2A13.07 13.07 0 0121.2 9.81a1 1 0 001.41-1.42zm-4.25 4.24a1 1 0 001.42-1.4 10.75 10.75 0 00-4.84-2.82 1 1 0 10-.52 1.92 8.94 8.94 0 013.94 2.3z"></path>
    </svg>
  );
};

UWifiSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWifiSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWifiSlash;
