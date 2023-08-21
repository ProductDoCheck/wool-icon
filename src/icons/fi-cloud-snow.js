import React from 'react';
import PropTypes from 'prop-types';

const FiCloudSnow = props => {
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
      <g clipPath="url(#clip0_19_26961)">
        <path d="M12 22h.01"></path>
        <path d="M16 20h.01"></path>
        <path d="M8 20h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M20 17.58A5 5 0 0018 8h-1.26A7.998 7.998 0 002.063 6.005 8 8 0 004 16.25"></path>
        <path d="M16 16h.01"></path>
        <path d="M8 16h.01"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_26961">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiCloudSnow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCloudSnow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCloudSnow;
