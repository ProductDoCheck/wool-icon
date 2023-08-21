import React from 'react';
import PropTypes from 'prop-types';

const FiUnderline = props => {
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
      <path d="M4 21h16"></path>
      <path d="M6 3v7a6 6 0 1012 0V3"></path>
    </svg>
  );
};

FiUnderline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUnderline.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUnderline;
