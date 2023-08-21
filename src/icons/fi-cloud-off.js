import React from 'react';
import PropTypes from 'prop-types';

const FiCloudOff = props => {
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
      <g clipPath="url(#clip0_19_27049)">
        <path d="M22.61 16.95A4.999 4.999 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3"></path>
        <path d="M1 1l22 22"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27049">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiCloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCloudOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCloudOff;
