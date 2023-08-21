import React from 'react';
import PropTypes from 'prop-types';

const UNerd = props => {
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
      <path d="M21.41 8.65v-.06a10 10 0 00-18.78-.06.85.85 0 00-.08.24 10 10 0 1018.86-.12zM12 4a8 8 0 016.92 4h-1.2a3 3 0 00-4.62.22A3.17 3.17 0 0012 8a3.17 3.17 0 00-1.1.22A3 3 0 006.28 8h-1.2A8 8 0 0112 4zm4.5 6a1 1 0 11-2.002 0 1 1 0 012.002 0zm-7 0a1 1 0 11-2 0 1 1 0 012 0zM12 20a8 8 0 01-8-8 8.24 8.24 0 01.26-2H5.5a3.001 3.001 0 006 .18 1 1 0 011 0 3.002 3.002 0 006-.18h1.24a8.24 8.24 0 01.26 2 8 8 0 01-8 8zm2.36-5.77a3.76 3.76 0 01-4.72 0 1.001 1.001 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1.001 1.001 0 00-1.28-1.54z"></path>
    </svg>
  );
};

UNerd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UNerd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UNerd;
