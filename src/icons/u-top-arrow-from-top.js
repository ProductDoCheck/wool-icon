import React from 'react';
import PropTypes from 'prop-types';

const UTopArrowFromTop = props => {
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
      <path d="M19 20H5a1 1 0 000 2h14a1 1 0 100-2zM8.71 7.71L11 5.41V17a1 1 0 002 0V5.41l2.29 2.3a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-4-4a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-4 4a1.004 1.004 0 101.42 1.42z"></path>
    </svg>
  );
};

UTopArrowFromTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTopArrowFromTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTopArrowFromTop;
