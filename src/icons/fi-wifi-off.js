import React from 'react';
import PropTypes from 'prop-types';

const FiWifiOff = props => {
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
      <g clipPath="url(#clip0_19_27136)">
        <path d="M1 1l22 22"></path>
        <path d="M12 20h.01"></path>
        <path d="M8.53 16.11a6 6 0 016.95 0"></path>
        <path d="M16.72 11.06c.82.4 1.585.9 2.28 1.49"></path>
        <path d="M5 12.55a10.94 10.94 0 015.17-2.39"></path>
        <path d="M1.42 9a15.91 15.91 0 014.7-2.88"></path>
        <path d="M10.71 5.05A16 16 0 0122.58 9"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27136">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiWifiOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiWifiOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiWifiOff;
