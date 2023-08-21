import React from 'react';
import PropTypes from 'prop-types';

const UExpandLeft = props => {
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
      <path d="M9.17 10.17a1 1 0 00.71-1.71L5.41 4H7a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v4a1 1 0 002 0V5.41l4.46 4.47a1 1 0 00.71.29zm6.37-1.71a1 1 0 00-1.42 0l-5.66 5.66a1 1 0 00.71 1.71 1 1 0 00.71-.29l5.66-5.66a1 1 0 000-1.42zM21 16a1 1 0 00-1 1v1.59l-4.46-4.47a1.004 1.004 0 10-1.42 1.42L18.59 20H17a1 1 0 000 2h4c.13-.002.26-.029.38-.08a1 1 0 00.54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UExpandLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExpandLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExpandLeft;
