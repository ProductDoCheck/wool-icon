import React from 'react';
import PropTypes from 'prop-types';

const UPrescriptionBottle = props => {
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
      <path d="M19 2H5a2 2 0 00-2 2v2a2 2 0 002 2v11a3 3 0 003 3h8a3 3 0 003-3V8a2 2 0 002-2V4a2 2 0 00-2-2zm-2 14h-6v-4h6v4zm0-6h-7a1 1 0 00-1 1v6a1 1 0 001 1h7v1a1 1 0 01-1 1H8a1 1 0 01-1-1V8h10v2zM5 6V4h14v2H5z"></path>
    </svg>
  );
};

UPrescriptionBottle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPrescriptionBottle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPrescriptionBottle;