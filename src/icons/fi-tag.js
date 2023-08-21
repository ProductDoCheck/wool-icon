import React from 'react';
import PropTypes from 'prop-types';

const FiTag = props => {
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
      <path d="M20.59 13.41l-7.17 7.17a1.998 1.998 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82v0z"></path>
      <path d="M7 7h.01"></path>
    </svg>
  );
};

FiTag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiTag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiTag;
