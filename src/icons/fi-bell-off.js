import React from 'react';
import PropTypes from 'prop-types';

const FiBellOff = props => {
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
      <g clipPath="url(#clip0_19_27197)">
        <path d="M13.73 21a1.999 1.999 0 01-3.46 0"></path>
        <path d="M18.63 13A17.888 17.888 0 0118 8"></path>
        <path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"></path>
        <path d="M18 8a6 6 0 00-9.33-5"></path>
        <path d="M1 1l22 22"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27197">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiBellOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiBellOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiBellOff;
