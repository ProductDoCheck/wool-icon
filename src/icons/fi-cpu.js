import React from 'react';
import PropTypes from 'prop-types';

const FiCpu = props => {
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
      <g clipPath="url(#clip0_19_27166)">
        <path d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
        <path d="M15 9H9v6h6V9z"></path>
        <path d="M9 1v3"></path>
        <path d="M15 1v3"></path>
        <path d="M9 20v3"></path>
        <path d="M15 20v3"></path>
        <path d="M20 9h3"></path>
        <path d="M20 14h3"></path>
        <path d="M1 9h3"></path>
        <path d="M1 14h3"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27166">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiCpu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCpu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCpu;
