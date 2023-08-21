import React from 'react';
import PropTypes from 'prop-types';

const ULayerGroupSlash = props => {
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
      <path d="M10.26 5L12 4l7 4-3.15 1.83a1 1 0 101 1.73l4.65-2.69a1 1 0 000-1.74l-9-5.2a1 1 0 00-1 0l-2.24 1.3a1 1 0 00-.37 1.37 1 1 0 001.37.4zM3.71 2.29a1.004 1.004 0 10-1.42 1.42L4.54 6l-2 1.17a1 1 0 000 1.74l9 5.2a1 1 0 001 0l.1-.06 1.07 1.07-1.67 1-8.54-4.99a1.002 1.002 0 00-1.469 1.132 1.003 1.003 0 00.469.608l9 5.2a1 1 0 00.5.13 1 1 0 00.5-.13l2.63-1.52 1.07 1.07L12 20l-8.5-4.87a1.003 1.003 0 00-1 1.74l9 5.2a1 1 0 001 0l5.17-3 2.62 2.63a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-18-17.99zM5 8l1-.58 2.75 2.75L5 8zm15.5 3.13l-2.12 1.22a1.003 1.003 0 001 1.74l2.12-1.22a1.003 1.003 0 10-1-1.74z"></path>
    </svg>
  );
};

ULayerGroupSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULayerGroupSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULayerGroupSlash;