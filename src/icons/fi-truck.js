import React from 'react';
import PropTypes from 'prop-types';

const FiTruck = props => {
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
      <path d="M18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
      <path d="M5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
      <path d="M16 8h4l3 3v5h-7V8z"></path>
      <path d="M16 3H1v13h15V3z"></path>
    </svg>
  );
};

FiTruck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiTruck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiTruck;
