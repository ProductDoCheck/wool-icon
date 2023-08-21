import React from 'react';
import PropTypes from 'prop-types';

const UClockSeven = props => {
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
      <path d="M11 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a1 1 0 00-1 1v4.93L8.63 14.3a1.003 1.003 0 101.74 1l1.5-2.6a1 1 0 00.11-.59L12 12V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UClockSeven.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClockSeven.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClockSeven;
