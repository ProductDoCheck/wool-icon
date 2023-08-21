import React from 'react';
import PropTypes from 'prop-types';

const FiCornerRightUp = props => {
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
      <path d="M10 9l5-5 5 5"></path>
      <path d="M4 20h7a4 4 0 004-4V4"></path>
    </svg>
  );
};

FiCornerRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCornerRightUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCornerRightUp;
