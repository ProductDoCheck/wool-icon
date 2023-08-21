import React from 'react';
import PropTypes from 'prop-types';

const FiCornerUpLeft = props => {
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
      <path d="M9 14L4 9l5-5"></path>
      <path d="M20 20v-7a4 4 0 00-4-4H4"></path>
    </svg>
  );
};

FiCornerUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCornerUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCornerUpLeft;
