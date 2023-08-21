import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeDownload = props => {
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
      <path d="M20.5 14a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.41l5.88 5.89a3 3 0 004.24 0l1.64-1.64a1.004 1.004 0 10-1.42-1.42l-1.64 1.64a1 1 0 01-1.4 0L4.91 8h6.59a1 1 0 100-2h-7a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm1.71-6.71a1 1 0 00-1.42 0l-1.29 1.3V3a1 1 0 00-2 0v5.59l-1.29-1.3a1.003 1.003 0 10-1.42 1.42l3 3a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l3-3a1 1 0 000-1.42z"></path>
    </svg>
  );
};

UEnvelopeDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeDownload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeDownload;