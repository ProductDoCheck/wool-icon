import React from 'react';
import PropTypes from 'prop-types';

const FiShuffle = props => {
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
      <path d="M16 3h5v5"></path>
      <path d="M4 20L21 3"></path>
      <path d="M21 16v5h-5"></path>
      <path d="M15 15l6 6"></path>
      <path d="M4 4l5 5"></path>
    </svg>
  );
};

FiShuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiShuffle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiShuffle;
