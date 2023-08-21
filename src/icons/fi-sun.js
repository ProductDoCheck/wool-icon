import React from 'react';
import PropTypes from 'prop-types';

const FiSun = props => {
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
      <g clipPath="url(#clip0_19_27066)">
        <path d="M12 21v2"></path>
        <path d="M18.36 18.36l1.42 1.42"></path>
        <path d="M4.22 19.78l1.42-1.42"></path>
        <path d="M21 12h2"></path>
        <path d="M1 12h2"></path>
        <path d="M12 17a5 5 0 100-10 5 5 0 000 10z"></path>
        <path d="M18.36 5.64l1.42-1.42"></path>
        <path d="M4.22 4.22l1.42 1.42"></path>
        <path d="M12 1v2"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27066">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiSun.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiSun;
