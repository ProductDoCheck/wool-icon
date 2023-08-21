import React from 'react';
import PropTypes from 'prop-types';

const FiXOctagon = props => {
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
      <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"></path>
      <path d="M15 9l-6 6"></path>
      <path d="M9 9l6 6"></path>
    </svg>
  );
};

FiXOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiXOctagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiXOctagon;
