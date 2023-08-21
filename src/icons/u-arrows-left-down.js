import React from 'react';
import PropTypes from 'prop-types';

const UArrowsLeftDown = props => {
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
      <path d="M21.71 16.29a1 1 0 00-1.42 0L18 18.59V9a3 3 0 00-3-3H5.41l2.3-2.29a1.004 1.004 0 10-1.42-1.42l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1 1 0 001.639-.325 1 1 0 00-.219-1.095L5.41 8H15a1 1 0 011 1v9.59l-2.29-2.3a1.005 1.005 0 00-1.42 1.42l4 4c.095.091.207.162.33.21a.94.94 0 00.76 0 1 1 0 00.33-.21l4-4a1.002 1.002 0 000-1.42z"></path>
    </svg>
  );
};

UArrowsLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowsLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowsLeftDown;
