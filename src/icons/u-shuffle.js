import React from 'react';
import PropTypes from 'prop-types';

const UShuffle = props => {
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
      <path d="M3 10a1 1 0 001-1V5.41L8.56 10A1 1 0 0010 10a1 1 0 000-1.41L5.41 4H9a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v6a1 1 0 001 1zm12.3 4a1 1 0 00-1.41 1.41l6.27 6.28a1 1 0 00.71.29.998.998 0 00.71-1.71L15.3 14zM9 20H5.41l16.3-16.29a1.004 1.004 0 10-1.42-1.42L4 18.59V15a1 1 0 00-2 0v6a1 1 0 00.08.38 1 1 0 00.54.54c.12.051.25.078.38.08h6a1 1 0 100-2z"></path>
    </svg>
  );
};

UShuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShuffle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShuffle;
