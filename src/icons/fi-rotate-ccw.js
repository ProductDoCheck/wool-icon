import React from 'react';
import PropTypes from 'prop-types';

const FiRotateCcw = props => {
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
      <path d="M1 4v6h6"></path>
      <path d="M3.51 15a9 9 0 102.13-9.36L1 10"></path>
    </svg>
  );
};

FiRotateCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiRotateCcw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiRotateCcw;
