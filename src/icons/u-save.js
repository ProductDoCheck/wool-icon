import React from 'react';
import PropTypes from 'prop-types';

const USave = props => {
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
      <path d="M20.71 9.29l-6-6a1 1 0 00-.32-.21A1.09 1.09 0 0014 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-8a1 1 0 00-.29-.71zM9 5h4v2H9V5zm6 14H9v-3a1 1 0 011-1h4a1 1 0 011 1v3zm4-1a1 1 0 01-1 1h-1v-3a3 3 0 00-3-3h-4a3 3 0 00-3 3v3H6a1 1 0 01-1-1V6a1 1 0 011-1h1v3a1 1 0 001 1h6a1 1 0 001-1V6.41l4 4V18z"></path>
    </svg>
  );
};

USave.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USave.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USave;
