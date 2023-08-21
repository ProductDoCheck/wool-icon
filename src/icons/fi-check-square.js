import React from 'react';
import PropTypes from 'prop-types';

const FiCheckSquare = props => {
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
      <path d="M9 11l3 3L22 4"></path>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
    </svg>
  );
};

FiCheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCheckSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCheckSquare;