import React from 'react';
import PropTypes from 'prop-types';

const UFileLandscape = props => {
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
      <path d="M22 10.94a1.306 1.306 0 00-.06-.27v-.09a1.071 1.071 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.1a1.099 1.099 0 00-.31-.11H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-6-.06zm-6-3.53L18.59 10H17a1 1 0 01-1-1V7.41zM20 17a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h9v3a3 3 0 003 3h3v5z"></path>
    </svg>
  );
};

UFileLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileLandscape.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileLandscape;
