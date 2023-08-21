import React from 'react';
import PropTypes from 'prop-types';

const U0Plus = props => {
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
      <path d="M18 5h1v1a1 1 0 002 0V5h1a1 1 0 100-2h-1V2a1 1 0 00-2 0v1h-1a1 1 0 100 2zm-5.5 1h-1a3 3 0 00-3 3v6a3 3 0 003 3h1a3 3 0 003-3V9a3 3 0 00-3-3zm1 9a1 1 0 01-1 1h-1a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 011 1v6zm8.1-6a1 1 0 00-.78 1.18 9 9 0 11-7-7 1.02 1.02 0 00.4-2A10.8 10.8 0 0012 1a11 11 0 1010.78 8.8.998.998 0 00-1.18-.8z"></path>
    </svg>
  );
};

U0Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

U0Plus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default U0Plus;