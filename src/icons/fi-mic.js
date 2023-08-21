import React from 'react';
import PropTypes from 'prop-types';

const FiMic = props => {
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
      <path d="M8 23h8"></path>
      <path d="M12 19v4"></path>
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3v0z"></path>
      <path d="M19 10v2a7 7 0 11-14 0v-2"></path>
    </svg>
  );
};

FiMic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMic;
