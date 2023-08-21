import React from 'react';
import PropTypes from 'prop-types';

const UFileSlash = props => {
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
      <path d="M21.71 20.29l-18-18a1.004 1.004 0 00-1.42 1.42L4 5.41V19a3 3 0 003 3h10a3 3 0 002.39-1.2l.9.91a.998.998 0 001.42 0 .997.997 0 00.219-1.095.998.998 0 00-.22-.325zM17 20H7a1 1 0 01-1-1V7.41l11.93 11.93A1 1 0 0117 20zM8.66 4H12v3a3 3 0 003 3h3v3.34a1 1 0 102 0V9v-.06a1.307 1.307 0 00-.06-.27v-.09a1.068 1.068 0 00-.19-.28l-6-6a1.068 1.068 0 00-.28-.19h-.09L13.06 2h-4.4a1 1 0 000 2zM14 5.41L16.59 8H15a1 1 0 01-1-1V5.41z"></path>
    </svg>
  );
};

UFileSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileSlash;
