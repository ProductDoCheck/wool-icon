import React from 'react';
import PropTypes from 'prop-types';

const UMapPin = props => {
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
      <path d="M16.37 12.79a1.001 1.001 0 00-.74 1.86C17.09 15.23 18 16.13 18 17c0 1.42-2.46 3-6 3s-6-1.58-6-3c0-.87.91-1.77 2.37-2.35a1 1 0 10-.74-1.86C5.36 13.69 4 15.26 4 17c0 2.8 3.51 5 8 5s8-2.2 8-5c0-1.74-1.36-3.31-3.63-4.21zM11 9.86V17a1 1 0 002 0V9.86a4 4 0 10-2 0zM12 4a2 2 0 110 4 2 2 0 010-4z"></path>
    </svg>
  );
};

UMapPin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMapPin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMapPin;
