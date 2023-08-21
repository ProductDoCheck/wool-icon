import React from 'react';
import PropTypes from 'prop-types';

const USuitcase = props => {
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
      <path d="M19 6.5h-3v-1a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4v-1zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.05h3v1.05a1 1 0 102 0v-1.05h6v1.05a1 1 0 002 0v-1.05h3v5.05zm0-7H4v-2a1 1 0 011-1h14a1 1 0 011 1v2z"></path>
    </svg>
  );
};

USuitcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USuitcase.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USuitcase;
