import React from 'react';
import PropTypes from 'prop-types';

const USmileSquintWink = props => {
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
      <path d="M8.42 12.21a1 1 0 00.71.29 1 1 0 00.71-.29l1.5-1.5a1.002 1.002 0 000-1.42l-1.5-1.5a1.004 1.004 0 10-1.42 1.42l.79.79-.79.79a1.001 1.001 0 000 1.42zm5.94 2a3.76 3.76 0 01-4.72 0 1.001 1.001 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1.001 1.001 0 00-1.28-1.54zM15 9a1 1 0 100 2 1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

USmileSquintWink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USmileSquintWink.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USmileSquintWink;
