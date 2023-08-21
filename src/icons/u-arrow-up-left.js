import React from 'react';
import PropTypes from 'prop-types';

const UArrowUpLeft = props => {
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
      <path d="M9.41 8H17a1 1 0 100-2H7a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 006 7v10a1 1 0 102 0V9.41l8.29 8.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L9.41 8z"></path>
    </svg>
  );
};

UArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowUpLeft;
