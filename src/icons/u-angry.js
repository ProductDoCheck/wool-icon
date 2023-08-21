import React from 'react';
import PropTypes from 'prop-types';

const UAngry = props => {
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
      <path d="M10 11a1 1 0 00.45-1.89l-2-1a1 1 0 10-.9 1.78l2 1A.93.93 0 0010 11zm2-9a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm-3.64-4.67a1 1 0 00.173 1.646.998.998 0 001.107-.116 3.76 3.76 0 014.72 0 1 1 0 00.64.23 1 1 0 00.64-1.76 5.81 5.81 0 00-7.28 0zm7.19-7.22l-2 1A1 1 0 0014 11a.93.93 0 00.45-.11l2-1a1 1 0 00-.9-1.78z"></path>
    </svg>
  );
};

UAngry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngry.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngry;
