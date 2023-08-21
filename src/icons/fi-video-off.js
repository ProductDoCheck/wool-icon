import React from 'react';
import PropTypes from 'prop-types';

const FiVideoOff = props => {
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
      <g clipPath="url(#clip0_19_27007)">
        <path d="M10.66 5H14a2 2 0 012 2v3.34l1 1L23 7v10m-7-1v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2l11 11z"></path>
        <path d="M1 1l22 22"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27007">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiVideoOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiVideoOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiVideoOff;
