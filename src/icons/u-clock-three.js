import React from 'react';
import PropTypes from 'prop-types';

const UClockThree = props => {
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
      <path d="M15 11h-2V7a1 1 0 00-2 0v5a1 1 0 001 1h3a1 1 0 000-2zm-3-9a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UClockThree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClockThree.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClockThree;
