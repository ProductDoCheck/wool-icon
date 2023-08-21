import React from 'react';
import PropTypes from 'prop-types';

const FiArrowUpLeft = props => {
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
      <path d="M17 17L7 7"></path>
      <path d="M7 17V7h10"></path>
    </svg>
  );
};

FiArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiArrowUpLeft;
