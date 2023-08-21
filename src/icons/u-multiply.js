import React from 'react';
import PropTypes from 'prop-types';

const UMultiply = props => {
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
      <path d="M13.41 12l6.3-6.29a1.004 1.004 0 10-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 00-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l6.29-6.3 6.29 6.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L13.41 12z"></path>
    </svg>
  );
};

UMultiply.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMultiply.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMultiply;
