import React from 'react';
import PropTypes from 'prop-types';

const UWindSun = props => {
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
      <path d="M11 4.5a1 1 0 001-1v-1a1 1 0 00-2 0v1a.998.998 0 001 1zm-7 7a1 1 0 00-1-1H2a1 1 0 000 2h1a.998.998 0 001-1zm.636 4.95l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 00-1.414-1.414zm0-9.9A1 1 0 006.05 5.136l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm12.021.293a.997.997 0 00.707-.293l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 00.707 1.707zM13 12a.998.998 0 001 1h5a3.004 3.004 0 003-3 1 1 0 00-2 0 1.013 1.013 0 01-1 1h-5a.998.998 0 00-1 1zm7 3h-5a1 1 0 000 2h5a1 1 0 010 2 1 1 0 000 2 3 3 0 000-6zM9 19a1 1 0 100 2 1 1 0 000-2zm6 0h-2a1 1 0 000 2h2a1.013 1.013 0 011 1 1 1 0 002 0 3.004 3.004 0 00-3-3zm-4-4a3.5 3.5 0 110-7 3.415 3.415 0 012.188.774 1 1 0 101.265-1.548A5.393 5.393 0 0011 6a5.5 5.5 0 100 11 1 1 0 000-2z"></path>
    </svg>
  );
};

UWindSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWindSun.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWindSun;
