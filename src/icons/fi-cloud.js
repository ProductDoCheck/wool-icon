import React from 'react';
import PropTypes from 'prop-types';

const FiCloud = props => {
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
      <g clipPath="url(#clip0_19_26958)">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_26958">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCloud;
