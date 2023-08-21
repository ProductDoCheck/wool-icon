import React from 'react';
import PropTypes from 'prop-types';

const UCopyLandscape = props => {
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
      <path d="M18 19H6a3 3 0 01-3-3V8a1 1 0 00-2 0v8a5 5 0 005 5h12a1 1 0 000-2zm5-9.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.09L16.06 3H8a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-4-.06zm-6-3.53L19.59 9H18a1 1 0 01-1-1V6.41zM21 14a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1h7v3a3 3 0 003 3h3v3z"></path>
    </svg>
  );
};

UCopyLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCopyLandscape.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCopyLandscape;
