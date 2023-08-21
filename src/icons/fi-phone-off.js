import React from 'react';
import PropTypes from 'prop-types';

const FiPhoneOff = props => {
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
      <g clipPath="url(#clip0_19_27120)">
        <path d="M5.19 12.81a19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91m2.59 3.4a15.999 15.999 0 003.41 2.6l1.27-1.27a1.999 1.999 0 012.11-.45c.907.338 1.85.573 2.81.7a2 2 0 011.72 2v3a2.001 2.001 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.418 19.418 0 01-3.33-2.67l2.82-2.84z"></path>
        <path d="M23 1L1 23"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27120">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiPhoneOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiPhoneOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiPhoneOff;
