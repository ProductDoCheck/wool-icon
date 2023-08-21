import React from 'react';
import PropTypes from 'prop-types';

const UArrowGrowth = props => {
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
      <path d="M21.92 6.62a1 1 0 00-.54-.54A1 1 0 0021 6h-5a1 1 0 000 2h2.59L13 13.59l-3.29-3.3a1.001 1.001 0 00-1.42 0l-6 6a1 1 0 00.325 1.639 1 1 0 001.095-.219L9 12.41l3.29 3.3a1.001 1.001 0 001.42 0L20 9.41V12a1 1 0 002 0V7a.997.997 0 00-.08-.38z"></path>
    </svg>
  );
};

UArrowGrowth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowGrowth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowGrowth;
