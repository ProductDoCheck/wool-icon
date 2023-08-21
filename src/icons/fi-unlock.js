import React from 'react';
import PropTypes from 'prop-types';

const FiUnlock = props => {
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
      <path d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z"></path>
      <path d="M7 11V7a5 5 0 019.9-1"></path>
    </svg>
  );
};

FiUnlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUnlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUnlock;
