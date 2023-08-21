import React from 'react';
import PropTypes from 'prop-types';

const FiHardDrive = props => {
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
      <path d="M22 12H2"></path>
      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11v0z"></path>
      <path d="M10 16h.01"></path>
      <path d="M6 16h.01"></path>
    </svg>
  );
};

FiHardDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiHardDrive.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiHardDrive;
