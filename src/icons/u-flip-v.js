import React from 'react';
import PropTypes from 'prop-types';

const UFlipV = props => {
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
      <path d="M7.6 15.18a1.004 1.004 0 00-1.42 1.42l1.06 1.06a1 1 0 001.639-.325 1 1 0 00-.219-1.095L7.6 15.18zm-3.79-5.4l-1.06 1.06a.91.91 0 00-.19.26 1 1 0 00-.27 1.61l1.06 1.06a1 1 0 001.639-.325 1 1 0 00-.219-1.095L4.41 12l.81-.81a1 1 0 00-1.41-1.41zm4.19.79a1 1 0 00-1 1v1.5a1 1 0 102 0v-1.5a1 1 0 00-1-1zm13.71.72l-5-5a1 1 0 00-1.09-.21A1 1 0 0015 7v10a1 1 0 00.62.92.84.84 0 00.38.08 1 1 0 00.71-.29l5-5a1.002 1.002 0 000-1.42zM17 14.59V9.41L19.59 12 17 14.59zM12 2a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1zM8.38 6.08a1 1 0 00-1.09.21L6.64 7a1 1 0 000 1.41 1 1 0 00.7.3 1 1 0 00.45-.11A1 1 0 009 7.57V7a1 1 0 00-.62-.92z"></path>
    </svg>
  );
};

UFlipV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFlipV.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFlipV;
