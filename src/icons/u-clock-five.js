import React from 'react';
import PropTypes from 'prop-types';

const UClockFive = props => {
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
      <path d="M11 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-8.07V7a1 1 0 00-2 0v5.11a1 1 0 00.11.59l1.5 2.6a1.004 1.004 0 001.74-1L12 11.93z"></path>
    </svg>
  );
};

UClockFive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClockFive.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClockFive;
