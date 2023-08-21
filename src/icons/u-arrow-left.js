import React from 'react';
import PropTypes from 'prop-types';

const UArrowLeft = props => {
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
      <path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 10-1.42-1.42l-5 5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l5 5a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L9.41 13H17a1 1 0 000-2z"></path>
    </svg>
  );
};

UArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowLeft;
