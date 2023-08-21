import React from 'react';
import PropTypes from 'prop-types';

const UShift = props => {
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
      <path d="M1.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M1.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M7.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M7.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M13.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M13.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
  );
};

UShift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShift.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShift;
