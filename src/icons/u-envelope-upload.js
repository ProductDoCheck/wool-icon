import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeUpload = props => {
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
      <path d="M20.5 14a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.41l5.88 5.89a3 3 0 004.24 0l1.64-1.64a1.004 1.004 0 10-1.42-1.42l-1.64 1.64a1 1 0 01-1.4 0L4.91 8h6.59a1 1 0 100-2h-7a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm1.71-8.71l-3-3a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-3 3a1.004 1.004 0 101.42 1.42l1.29-1.3V11a1 1 0 002 0V5.41l1.29 1.3a1 1 0 001.639-.325 1 1 0 00-.219-1.095z"></path>
    </svg>
  );
};

UEnvelopeUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeUpload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeUpload;
