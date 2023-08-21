import React from 'react';
import PropTypes from 'prop-types';

const FiCrop = props => {
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
      <g clipPath="url(#clip0_19_26975)">
        <path d="M6.13 1L6 16a2 2 0 002 2h15"></path>
        <path d="M1 6.13L16 6a2 2 0 012 2v15"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_26975">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiCrop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCrop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCrop;
