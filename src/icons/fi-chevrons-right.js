import React from 'react';
import PropTypes from 'prop-types';

const FiChevronsRight = props => {
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
      <path d="M13 17l5-5-5-5"></path>
      <path d="M6 17l5-5-5-5"></path>
    </svg>
  );
};

FiChevronsRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiChevronsRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiChevronsRight;
