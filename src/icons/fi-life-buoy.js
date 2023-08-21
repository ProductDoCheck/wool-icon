import React from 'react';
import PropTypes from 'prop-types';

const FiLifeBuoy = props => {
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
      <path d="M14.83 14.83l4.24 4.24"></path>
      <path d="M4.93 19.07l4.24-4.24"></path>
      <path d="M14.83 9.17l4.24-4.24"></path>
      <path d="M14.83 9.17l3.53-3.53"></path>
      <path d="M4.93 4.93l4.24 4.24"></path>
    </svg>
  );
};

FiLifeBuoy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiLifeBuoy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiLifeBuoy;
