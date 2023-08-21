import React from 'react';
import PropTypes from 'prop-types';

const USun = props => {
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
      <path d="M5.64 17l-.71.71a1 1 0 000 1.41 1 1 0 001.41 0l.71-.71A1 1 0 005.64 17zM5 12a1 1 0 00-1-1H3a1 1 0 000 2h1a1 1 0 001-1zm7-7a1 1 0 001-1V3a1 1 0 00-2 0v1a1 1 0 001 1zM5.64 7.05a1 1 0 001.41 0 1 1 0 000-1.41l-.71-.71a1 1 0 00-1.41 1.41l.71.71zm12 .29a1 1 0 00.7-.29l.71-.71a1 1 0 10-1.41-1.41l-.64.71a1 1 0 000 1.41 1 1 0 00.66.29h-.02zM21 11h-1a1 1 0 000 2h1a1 1 0 000-2zm-9 8a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm6.36-2A1 1 0 0017 18.36l.71.71a1 1 0 001.41 0 1 1 0 000-1.41l-.76-.66zM12 6.5a5.5 5.5 0 105.5 5.5A5.51 5.51 0 0012 6.5zm0 9a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"></path>
    </svg>
  );
};

USun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USun.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USun;
