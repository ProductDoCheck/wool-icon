import React from 'react';
import PropTypes from 'prop-types';

const FiCloudDrizzle = props => {
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
      <g clipPath="url(#clip0_19_26960)">
        <path d="M12 21v2"></path>
        <path d="M16 19v2"></path>
        <path d="M8 19v2"></path>
        <path d="M12 15v2"></path>
        <path d="M16 13v2"></path>
        <path d="M8 13v2"></path>
        <path d="M20 16.58A5 5 0 0018 7h-1.26A7.998 7.998 0 002.063 5.005 8 8 0 004 15.25"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_26960">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiCloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCloudDrizzle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCloudDrizzle;
