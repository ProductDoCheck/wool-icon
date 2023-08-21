import React from 'react';
import PropTypes from 'prop-types';

const UClosedCaptioning = props => {
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
      <path d="M11.24 13.14a1 1 0 00-1.37.36 1 1 0 01-1.58.19A.931.931 0 018 13v-2a1 1 0 011.88-.48 1 1 0 101.71-1.04 3.082 3.082 0 00-1.436-1.248A3 3 0 006 11v2a3 3 0 005.59 1.5 1 1 0 00-.35-1.36zm6 0a1 1 0 00-1.37.36 1 1 0 01-1.58.19A.93.93 0 0114 13v-2a1 1 0 011.88-.48 1 1 0 101.71-1.04 3.082 3.082 0 00-1.436-1.248 3 3 0 00-3.275.647A3 3 0 0012 11v2a3 3 0 005.59 1.5 1 1 0 00-.35-1.36zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UClosedCaptioning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClosedCaptioning.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClosedCaptioning;
