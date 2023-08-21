import React from 'react';
import PropTypes from 'prop-types';

const FiCornerLeftDown = props => {
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
      <path d="M14 15l-5 5-5-5"></path>
      <path d="M20 4h-7a4 4 0 00-4 4v12"></path>
    </svg>
  );
};

FiCornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCornerLeftDown;
