import React from 'react';
import PropTypes from 'prop-types';

const FiRotateCw = props => {
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
      <path d="M23 4v6h-6"></path>
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"></path>
    </svg>
  );
};

FiRotateCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiRotateCw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiRotateCw;
