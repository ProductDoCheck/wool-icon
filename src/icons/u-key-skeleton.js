import React from 'react';
import PropTypes from 'prop-types';

const UKeySkeleton = props => {
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
      <path d="M21 4.41l.71-.7a1.004 1.004 0 10-1.42-1.42l-1.4 1.41-2.83 2.83-6.31 6.3a5 5 0 101.42 1.42l5.59-5.6 2.12 2.13a.999.999 0 001.63-.33 1.002 1.002 0 00-.22-1.09l-2.12-2.12 1.42-1.41.7.7a1 1 0 101.42-1.41L21 4.41zM7 20a3 3 0 110-6 3 3 0 010 6z"></path>
    </svg>
  );
};

UKeySkeleton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UKeySkeleton.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UKeySkeleton;
