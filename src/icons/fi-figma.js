import React from 'react';
import PropTypes from 'prop-types';

const FiFigma = props => {
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
      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0v0z"></path>
      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"></path>
    </svg>
  );
};

FiFigma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiFigma.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiFigma;