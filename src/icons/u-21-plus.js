import React from 'react';
import PropTypes from 'prop-types';

const U21Plus = props => {
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
      <path d="M17 18a1 1 0 001-1V7a1 1 0 00-2 0v10a1 1 0 001 1zm1-13h1v1a1 1 0 002 0V5h1a1 1 0 100-2h-1V2a1 1 0 00-2 0v1h-1a1 1 0 100 2zm3.6 4a1 1 0 00-.78 1.18 9 9 0 11-7-7 1.02 1.02 0 00.4-2A10.8 10.8 0 0012 1a11 11 0 1010.78 8.8.998.998 0 00-1.18-.8zM10 13h1a3 3 0 003-3V9a3 3 0 00-3-3h-1a3 3 0 00-3 3 1 1 0 002 0 1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a3 3 0 00-3 3v3a1 1 0 001 1h5a1 1 0 100-2H9v-2a1 1 0 011-1z"></path>
    </svg>
  );
};

U21Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

U21Plus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default U21Plus;
