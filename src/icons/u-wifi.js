import React from 'react';
import PropTypes from 'prop-types';

const UWifi = props => {
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
      <path d="M12 15a3 3 0 100 5.999A3 3 0 0012 15zm0 4a1 1 0 110-2 1 1 0 010 2zm0-8a7.06 7.06 0 00-4.95 2.05 1 1 0 000 1.41 1 1 0 001.41 0 5 5 0 017.08 0 1 1 0 00.7.3 1 1 0 00.76-1.71A7.061 7.061 0 0012 11zm0-4a11.08 11.08 0 00-7.78 3.22 1.004 1.004 0 101.42 1.42 9 9 0 0112.72 0 1 1 0 00.71.29 1 1 0 00.71-1.71A11.08 11.08 0 0012 7zm10.61.39a15 15 0 00-21.22 0 1.004 1.004 0 101.42 1.42 13 13 0 0118.38 0 1 1 0 001.639-.325 1 1 0 00-.219-1.095z"></path>
    </svg>
  );
};

UWifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWifi.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWifi;
