import React from 'react';
import PropTypes from 'prop-types';

const FiCornerUpRight = props => {
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
      <path d="M15 14l5-5-5-5"></path>
      <path d="M4 20v-7a4 4 0 014-4h12"></path>
    </svg>
  );
};

FiCornerUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCornerUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCornerUpRight;
