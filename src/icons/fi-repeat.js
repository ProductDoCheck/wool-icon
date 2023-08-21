import React from 'react';
import PropTypes from 'prop-types';

const FiRepeat = props => {
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
      <path d="M7 23l-4-4 4-4"></path>
      <path d="M21 13v2a4 4 0 01-4 4H3"></path>
      <path d="M17 1l4 4-4 4"></path>
      <path d="M3 11V9a4 4 0 014-4h14"></path>
    </svg>
  );
};

FiRepeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiRepeat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiRepeat;
