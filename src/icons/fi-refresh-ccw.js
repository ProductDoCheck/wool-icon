import React from 'react';
import PropTypes from 'prop-types';

const FiRefreshCcw = props => {
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
      <path d="M23 20v-6h-6"></path>
      <path d="M1 4v6h6"></path>
      <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"></path>
    </svg>
  );
};

FiRefreshCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiRefreshCcw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiRefreshCcw;
