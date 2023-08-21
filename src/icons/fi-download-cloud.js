import React from 'react';
import PropTypes from 'prop-types';

const FiDownloadCloud = props => {
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
      <g clipPath="url(#clip0_19_26979)">
        <path d="M8 17l4 4 4-4"></path>
        <path d="M12 12v9"></path>
        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8.001 8.001 0 002.532 6.268 8 8 0 003 16.29"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_26979">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiDownloadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiDownloadCloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiDownloadCloud;
