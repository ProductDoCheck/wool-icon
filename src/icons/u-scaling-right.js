import React from 'react';
import PropTypes from 'prop-types';

const UScalingRight = props => {
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
      <path d="M21.92 2.62a1 1 0 00-.54-.54A1 1 0 0021 2h-4a1 1 0 100 2h1.59L12 10.59 9.88 8.46a1.004 1.004 0 00-1.42 1.42L10.59 12 4 18.59V17a1 1 0 10-2 0v4a1 1 0 00.08.38 1 1 0 00.54.54c.12.051.25.078.38.08h4a1 1 0 000-2H5.41L12 13.41l2.12 2.13a1 1 0 00.71.29 1 1 0 00.71-1.71L13.41 12 20 5.41V7a1 1 0 002 0V3a1.001 1.001 0 00-.08-.38z"></path>
    </svg>
  );
};

UScalingRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UScalingRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UScalingRight;
