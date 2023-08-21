import React from 'react';
import PropTypes from 'prop-types';

const FiShare2 = props => {
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
      <path d="M18 22a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M6 15a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M8.59 13.51l6.83 3.98"></path>
      <path d="M18 8a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M15.41 6.51l-6.82 3.98"></path>
    </svg>
  );
};

FiShare2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiShare2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiShare2;
