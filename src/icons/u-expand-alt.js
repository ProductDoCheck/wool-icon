import React from 'react';
import PropTypes from 'prop-types';

const UExpandAlt = props => {
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
      <path d="M9.79 12.79L4 18.59V17a1 1 0 10-2 0v4a1 1 0 00.08.38 1 1 0 00.54.54c.12.051.25.078.38.08h4a1 1 0 000-2H5.41l5.8-5.79a1.004 1.004 0 10-1.42-1.42zM21.92 2.62a1 1 0 00-.54-.54A1 1 0 0021 2h-4a1 1 0 100 2h1.59l-5.8 5.79a1.001 1.001 0 00.325 1.639 1 1 0 001.095-.219L20 5.41V7a1 1 0 002 0V3a1.001 1.001 0 00-.08-.38z"></path>
    </svg>
  );
};

UExpandAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExpandAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExpandAlt;
