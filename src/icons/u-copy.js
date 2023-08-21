import React from 'react';
import PropTypes from 'prop-types';

const UCopy = props => {
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
      <path d="M21 8.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H10a3 3 0 00-3 3v1H6a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3v-1h1a3 3 0 003-3V9v-.06zm-6-3.53L17.59 8H16a1 1 0 01-1-1V5.41zM15 19a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h1v7a3 3 0 003 3h5v1zm4-4a1 1 0 01-1 1h-8a1 1 0 01-1-1V5a1 1 0 011-1h3v3a3 3 0 003 3h3v5z"></path>
    </svg>
  );
};

UCopy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCopy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCopy;