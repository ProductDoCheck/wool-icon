import React from 'react';
import PropTypes from 'prop-types';

const FiAlignLeft = props => {
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
      <path d="M17 18H3"></path>
      <path d="M21 14H3"></path>
      <path d="M17 10H3"></path>
      <path d="M21 6H3"></path>
    </svg>
  );
};

FiAlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiAlignLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiAlignLeft;
