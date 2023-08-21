import React from 'react';
import PropTypes from 'prop-types';

const FiCornerDownRight = props => {
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
      <path d="M15 10l5 5-5 5"></path>
      <path d="M4 4v7a4 4 0 004 4h12"></path>
    </svg>
  );
};

FiCornerDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCornerDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCornerDownRight;
