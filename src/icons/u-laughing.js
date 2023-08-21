import React from 'react';
import PropTypes from 'prop-types';

const ULaughing = props => {
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
      <path d="M14.16 12.21a1 1 0 00.71.29 1 1 0 00.71-1.71l-.79-.79.79-.79a1.005 1.005 0 00-.71-1.714 1.004 1.004 0 00-.71.294l-1.5 1.5a1 1 0 000 1.42l1.5 1.5zm-5.08 0l1.5-1.5a1.002 1.002 0 000-1.42l-1.5-1.5a1.004 1.004 0 10-1.42 1.42l.8.79-.8.79a1.001 1.001 0 001.094 1.636 1 1 0 00.326-.216zm5.28 2a3.76 3.76 0 01-4.72 0 1.001 1.001 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1.001 1.001 0 00-1.28-1.54zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

ULaughing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULaughing.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULaughing;
