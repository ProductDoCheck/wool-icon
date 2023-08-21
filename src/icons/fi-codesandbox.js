import React from 'react';
import PropTypes from 'prop-types';

const FiCodesandbox = props => {
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
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
      <path d="M21 12l-4.5 2.6v5.19"></path>
      <path d="M7.5 19.79V14.6L3 12"></path>
      <path d="M3.27 6.96L12 12.01l8.73-5.05"></path>
      <path d="M12 22.08V12"></path>
      <path d="M7.5 4.21l4.5 2.6 4.5-2.6"></path>
    </svg>
  );
};

FiCodesandbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCodesandbox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCodesandbox;
