import React from 'react';
import PropTypes from 'prop-types';

const UScalingLeft = props => {
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
      <path d="M21 16a1 1 0 00-1 1v1.59L13.41 12l2.13-2.12a1.004 1.004 0 10-1.42-1.42L12 10.59 5.41 4H7a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v4a1 1 0 002 0V5.41L10.59 12l-2.13 2.12a1 1 0 00.71 1.71 1 1 0 00.71-.29L12 13.41 18.59 20H17a1 1 0 000 2h4c.13-.002.26-.029.38-.08a1 1 0 00.54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UScalingLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UScalingLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UScalingLeft;
