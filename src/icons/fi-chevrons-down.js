import React from 'react';
import PropTypes from 'prop-types';

const FiChevronsDown = props => {
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
      <path d="M7 13l5 5 5-5"></path>
      <path d="M7 6l5 5 5-5"></path>
    </svg>
  );
};

FiChevronsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiChevronsDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiChevronsDown;
