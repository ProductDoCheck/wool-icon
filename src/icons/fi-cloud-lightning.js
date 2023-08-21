import React from 'react';
import PropTypes from 'prop-types';

const FiCloudLightning = props => {
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
      <g clipPath="url(#clip0_19_27076)">
        <path d="M19 16.9A5 5 0 0018 7h-1.26A8.001 8.001 0 001.681 5.757 8 8 0 005.121 16"></path>
        <path d="M13 11l-4 6h6l-4 6"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27076">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiCloudLightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCloudLightning.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCloudLightning;
