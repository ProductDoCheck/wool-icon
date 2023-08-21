import React from 'react';
import PropTypes from 'prop-types';

const UEnvelope = props => {
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
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-.41 2l-5.88 5.88a1.002 1.002 0 01-1.42 0L5.41 6h13.18zM20 17a1 1 0 01-1 1H5a1 1 0 01-1-1V7.41l5.88 5.88a3 3 0 004.24 0L20 7.41V17z"></path>
    </svg>
  );
};

UEnvelope.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelope.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelope;
