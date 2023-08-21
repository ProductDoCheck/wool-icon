import React from 'react';
import PropTypes from 'prop-types';

const UPrevious = props => {
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
      <path d="M13.41 12l3.3-3.29A1.005 1.005 0 0016 6.996a1.004 1.004 0 00-.71.294l-4 4a1.002 1.002 0 000 1.42l4 4a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L13.41 12zM8 7a1 1 0 00-1 1v8a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UPrevious.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPrevious.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPrevious;
