import React from 'react';
import PropTypes from 'prop-types';

const FiMicOff = props => {
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
      <g clipPath="url(#clip0_19_27027)">
        <path d="M8 23h8"></path>
        <path d="M1 1l22 22"></path>
        <path d="M15 9.34V4a3 3 0 00-5.94-.6M9 9v3a3 3 0 005.12 2.12L9 9z"></path>
        <path d="M17 16.95A7 7 0 015 12v-2m14 0v2c0 .412-.037.824-.11 1.23"></path>
        <path d="M12 19v4"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27027">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiMicOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMicOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMicOff;
