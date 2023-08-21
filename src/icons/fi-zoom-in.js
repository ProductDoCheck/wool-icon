import React from 'react';
import PropTypes from 'prop-types';

const FiZoomIn = props => {
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
      <path d="M11 19a8 8 0 100-16 8 8 0 000 16z"></path>
      <path d="M21 21l-4.35-4.35"></path>
      <path d="M11 8v6"></path>
      <path d="M8 11h6"></path>
    </svg>
  );
};

FiZoomIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiZoomIn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiZoomIn;
