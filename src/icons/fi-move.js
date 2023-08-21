import React from 'react';
import PropTypes from 'prop-types';

const FiMove = props => {
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
      <path d="M15 19l-3 3-3-3"></path>
      <path d="M19 9l3 3-3 3"></path>
      <path d="M5 9l-3 3 3 3"></path>
      <path d="M2 12h20"></path>
      <path d="M9 5l3-3 3 3"></path>
      <path d="M12 2v20"></path>
    </svg>
  );
};

FiMove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMove.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMove;
