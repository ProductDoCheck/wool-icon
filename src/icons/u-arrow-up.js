import React from 'react';
import PropTypes from 'prop-types';

const UArrowUp = props => {
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
      <path d="M17.71 11.29l-5-5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-5 5a1.004 1.004 0 101.42 1.42L11 9.41V17a1 1 0 002 0V9.41l3.29 3.3a1.001 1.001 0 001.639-.325 1 1 0 00-.22-1.095z"></path>
    </svg>
  );
};

UArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowUp;
