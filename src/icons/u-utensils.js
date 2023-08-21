import React from 'react';
import PropTypes from 'prop-types';

const UUtensils = props => {
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
      <path d="M19 2a1 1 0 00-1 1v5.46l-1 .67V3a1 1 0 00-2 0v6.13l-1-.67V3a1 1 0 00-2 0v6a1 1 0 00.45.83L15 11.54V21a1 1 0 002 0v-9.46l2.55-1.71A1 1 0 0020 9V3a1 1 0 00-1-1zM9 2a5 5 0 00-5 5v6a1 1 0 001 1h3v7a1 1 0 102 0V3a1 1 0 00-1-1zM8 12H6V7a3 3 0 012-2.83V12z"></path>
    </svg>
  );
};

UUtensils.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUtensils.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUtensils;
