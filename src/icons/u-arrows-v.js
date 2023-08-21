import React from 'react';
import PropTypes from 'prop-types';

const UArrowsV = props => {
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
      <path d="M15.29 16.29L13 18.59V5.41l2.29 2.3a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-4-4a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-4 4a1.004 1.004 0 101.42 1.42L11 5.41v13.18l-2.29-2.3a1.004 1.004 0 10-1.42 1.42l4 4c.095.091.207.162.33.21a.94.94 0 00.76 0 1 1 0 00.33-.21l4-4a1.004 1.004 0 10-1.42-1.42z"></path>
    </svg>
  );
};

UArrowsV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowsV.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowsV;
