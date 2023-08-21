import React from 'react';
import PropTypes from 'prop-types';

const FiMinimize2 = props => {
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
      <path d="M4 14h6v6"></path>
      <path d="M3 21l7-7"></path>
      <path d="M20 10h-6V4"></path>
      <path d="M14 10l7-7"></path>
    </svg>
  );
};

FiMinimize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMinimize2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMinimize2;
