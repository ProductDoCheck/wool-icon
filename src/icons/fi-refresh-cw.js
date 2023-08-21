import React from 'react';
import PropTypes from 'prop-types';

const FiRefreshCw = props => {
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
      <path d="M1 20v-6h6"></path>
      <path d="M23 4v6h-6"></path>
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"></path>
    </svg>
  );
};

FiRefreshCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiRefreshCw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiRefreshCw;
