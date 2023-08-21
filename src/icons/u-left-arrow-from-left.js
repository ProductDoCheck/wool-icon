import React from 'react';
import PropTypes from 'prop-types';

const ULeftArrowFromLeft = props => {
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
      <path d="M17 11H5.41l2.3-2.29a1.004 1.004 0 10-1.42-1.42l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1 1 0 001.639-.325 1 1 0 00-.219-1.095L5.41 13H17a1 1 0 000-2zm4-7a1 1 0 00-1 1v14a1 1 0 102 0V5a1 1 0 00-1-1z"></path>
    </svg>
  );
};

ULeftArrowFromLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULeftArrowFromLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULeftArrowFromLeft;
