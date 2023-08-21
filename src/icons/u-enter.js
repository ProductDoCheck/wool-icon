import React from 'react';
import PropTypes from 'prop-types';

const UEnter = props => {
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
      <path d="M19 6a1 1 0 00-1 1v4a1 1 0 01-1 1H7.41l1.3-1.29a1.004 1.004 0 00-1.42-1.42l-3 3a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l3 3a1 1 0 001.639-.325 1 1 0 00-.219-1.095L7.41 14H17a3 3 0 003-3V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UEnter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnter;
