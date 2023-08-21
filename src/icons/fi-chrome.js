import React from 'react';
import PropTypes from 'prop-types';

const FiChrome = props => {
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M21.17 8H12"></path>
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
      <path d="M10.88 21.94L15.46 14"></path>
      <path d="M3.95 6.06L8.54 14"></path>
    </svg>
  );
};

FiChrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiChrome.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiChrome;
