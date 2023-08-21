import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeCheck = props => {
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
      <path d="M16.29 8.71a1 1 0 001.42 0l4-4a1.004 1.004 0 10-1.42-1.42L17 6.59l-1.29-1.3a1.003 1.003 0 10-1.42 1.42l2 2zM21 8a1 1 0 00-1 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8.41l5.88 5.89a3 3 0 002.11.87 3.08 3.08 0 002.16-.9l1.72-1.72a1.004 1.004 0 10-1.42-1.42l-1.75 1.75a1 1 0 01-1.4 0L5.41 7H11a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V9a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UEnvelopeCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeCheck;
