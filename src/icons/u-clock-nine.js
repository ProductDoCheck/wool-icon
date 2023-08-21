import React from 'react';
import PropTypes from 'prop-types';

const UClockNine = props => {
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
      <path d="M11 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a1 1 0 00-1 1v4H8a1 1 0 000 2h3a1 1 0 001-1V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UClockNine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClockNine.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClockNine;
