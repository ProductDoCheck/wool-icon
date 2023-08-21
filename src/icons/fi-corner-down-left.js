import React from 'react';
import PropTypes from 'prop-types';

const FiCornerDownLeft = props => {
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
      <path d="M9 10l-5 5 5 5"></path>
      <path d="M20 4v7a4 4 0 01-4 4H4"></path>
    </svg>
  );
};

FiCornerDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCornerDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCornerDownLeft;
