import React from 'react';
import PropTypes from 'prop-types';

const USunset = props => {
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
      <path d="M17.66 8.34a1 1 0 00.7-.29l.71-.71a1 1 0 10-1.41-1.41l-.66.71a1 1 0 000 1.41 1 1 0 00.66.29zM12 6a1 1 0 001-1V4a1 1 0 00-2 0v1a1 1 0 001 1zm-8 6H3a1 1 0 000 2h1a1 1 0 000-2zm1.64-3.95a1 1 0 001.41 0 1 1 0 000-1.41l-.71-.71a1 1 0 00-1.41 1.41l.71.71zM21 12h-1a1 1 0 000 2h1a1 1 0 000-2zm-10 7H8a1 1 0 000 2h3a1 1 0 000-2zm7-4h-.88a5.39 5.39 0 00.38-2 5.5 5.5 0 00-11 0 5.39 5.39 0 00.38 2H6a1 1 0 000 2h12a1 1 0 000-2zm-3.15 0h-5.7a3.44 3.44 0 01-.65-2 3.5 3.5 0 117 0 3.44 3.44 0 01-.65 2zM16 19h-1a1 1 0 000 2h1a1 1 0 000-2z"></path>
    </svg>
  );
};

USunset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USunset.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USunset;
