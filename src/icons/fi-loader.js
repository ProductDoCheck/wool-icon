import React from 'react';
import PropTypes from 'prop-types';

const FiLoader = props => {
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
      <path d="M12 18v4"></path>
      <path d="M16.24 16.24l2.83 2.83"></path>
      <path d="M4.93 19.07l2.83-2.83"></path>
      <path d="M18 12h4"></path>
      <path d="M2 12h4"></path>
      <path d="M16.24 7.76l2.83-2.83"></path>
      <path d="M4.93 4.93l2.83 2.83"></path>
      <path d="M12 2v4"></path>
    </svg>
  );
};

FiLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiLoader.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiLoader;
