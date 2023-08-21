import React from 'react';
import PropTypes from 'prop-types';

const FiXSquare = props => {
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
      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
      <path d="M9 9l6 6"></path>
      <path d="M15 9l-6 6"></path>
    </svg>
  );
};

FiXSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiXSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiXSquare;
