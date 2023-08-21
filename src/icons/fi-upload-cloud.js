import React from 'react';
import PropTypes from 'prop-types';

const FiUploadCloud = props => {
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
      <g clipPath="url(#clip0_19_27078)">
        <path d="M16 16l-4-4-4 4"></path>
        <path d="M12 12v9"></path>
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"></path>
        <path d="M16 16l-4-4-4 4"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27078">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiUploadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUploadCloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUploadCloud;
