import React from 'react';
import PropTypes from 'prop-types';

const FiVolume1 = props => {
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
      <path d="M15.54 8.46a5 5 0 010 7.07"></path>
      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
    </svg>
  );
};

FiVolume1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiVolume1.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiVolume1;
