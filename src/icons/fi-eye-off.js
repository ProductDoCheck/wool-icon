import React from 'react';
import PropTypes from 'prop-types';

const FiEyeOff = props => {
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
      <g clipPath="url(#clip0_19_27093)">
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.498 18.498 0 01-2.16 3.19m-6.72-1.07a3.001 3.001 0 01-5.194-2.098A3 3 0 019.88 9.88m8.06 8.06A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94l11.88 11.88z"></path>
        <path d="M1 1l22 22"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27093">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiEyeOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiEyeOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiEyeOff;
