import React from 'react';
import PropTypes from 'prop-types';

const FiCornerRightDown = props => {
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
      <path d="M10 15l5 5 5-5"></path>
      <path d="M4 4h7a4 4 0 014 4v12"></path>
    </svg>
  );
};

FiCornerRightDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCornerRightDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCornerRightDown;
