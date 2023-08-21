import React from 'react';
import PropTypes from 'prop-types';

const UCornerDownRight = props => {
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
      <path d="M19.61 16a1.188 1.188 0 00-.22-.33L14.76 11a1 1 0 00-1.41 1.41l2.92 2.92h-7a3 3 0 01-3-3V3a1 1 0 00-2 0v9.37a5 5 0 005 5h7l-2.92 2.92a1.002 1.002 0 00.326 1.636 1 1 0 001.084-.216l4.63-4.63a1 1 0 00.22-1.08z"></path>
    </svg>
  );
};

UCornerDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerDownRight;
