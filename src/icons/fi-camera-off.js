import React from 'react';
import PropTypes from 'prop-types';

const FiCameraOff = props => {
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
      <g clipPath="url(#clip0_19_27128)">
        <path d="M1 1l22 22"></path>
        <path d="M9 3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3l15 15z"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27128">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiCameraOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCameraOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCameraOff;
