import React from 'react';
import PropTypes from 'prop-types';

const ULeftArrowToLeft = props => {
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
      <path d="M21 11H9.41l2.3-2.29A1.005 1.005 0 0011 6.996a1.004 1.004 0 00-.71.294l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L9.41 13H21a1 1 0 000-2zM3 3a1 1 0 00-1 1v16a1 1 0 102 0V4a1 1 0 00-1-1z"></path>
    </svg>
  );
};

ULeftArrowToLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULeftArrowToLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULeftArrowToLeft;
