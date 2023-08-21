import React from 'react';
import PropTypes from 'prop-types';

const FiZapOff = props => {
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
      <g clipPath="url(#clip0_19_27199)">
        <path d="M18.57 12.91L21 10h-5.34"></path>
        <path d="M8 8l-5 6h9l-1 8 5-6"></path>
        <path d="M12.41 6.75L13 2l-2.43 2.92"></path>
        <path d="M1 1l22 22"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27199">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiZapOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiZapOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiZapOff;
