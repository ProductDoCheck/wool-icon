import React from 'react';
import PropTypes from 'prop-types';

const UExpandArrowsAlt = props => {
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
      <path d="M9.29 13.29L4 18.59V17a1 1 0 10-2 0v4a1 1 0 00.08.38 1 1 0 00.54.54c.12.051.25.078.38.08h4a1 1 0 000-2H5.41l5.3-5.29a1.004 1.004 0 10-1.42-1.42zM5.41 4H7a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v4a1 1 0 002 0V5.41l5.29 5.3a1 1 0 001.639-.325 1 1 0 00-.219-1.095L5.41 4zM21 16a1 1 0 00-1 1v1.59l-5.29-5.3a1.004 1.004 0 10-1.42 1.42l5.3 5.29H17a1 1 0 000 2h4c.13-.002.26-.029.38-.08a1 1 0 00.54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 00-1-1zm.92-13.38a1 1 0 00-.54-.54A1 1 0 0021 2h-4a1 1 0 100 2h1.59l-5.3 5.29a1 1 0 00.325 1.639 1 1 0 001.095-.219L20 5.41V7a1 1 0 002 0V3a1.001 1.001 0 00-.08-.38z"></path>
    </svg>
  );
};

UExpandArrowsAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExpandArrowsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExpandArrowsAlt;
