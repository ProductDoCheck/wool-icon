import React from 'react';
import PropTypes from 'prop-types';

const UBasketballHoop = props => {
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
      <path d="M18 10H6a1 1 0 000 2h1v9a1 1 0 102 0v-1h2v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-9h1a1 1 0 000-2zm-7 8H9v-2h2v2zm0-4H9v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm5-12H4a3 3 0 00-3 3v8a3 3 0 003 3 1 1 0 000-2 1 1 0 01-1-1V5a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1 1 1 0 000 2 3 3 0 003-3V5a3 3 0 00-3-3zm-6 6a1 1 0 100-2h-4a1 1 0 000 2h4z"></path>
    </svg>
  );
};

UBasketballHoop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBasketballHoop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBasketballHoop;
