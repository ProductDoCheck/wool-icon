import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeDownloadAlt = props => {
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
      <path d="M11.29 8.79a1 1 0 001.42 0l2-2a1 1 0 10-1.42-1.41l-.29.29V2.92a1 1 0 00-2 0v2.75l-.29-.29a1.001 1.001 0 10-1.42 1.41l2 2zM16 11.08H8a3 3 0 00-3 3v5a3 3 0 003 3h8a3 3 0 003-3v-5a3 3 0 00-3-3zm-.42 2L12.7 16a1 1 0 01-1.4 0l-2.88-2.92h7.16zm1.42 6a1 1 0 01-1 1H8a1 1 0 01-1-1v-4.59l2.88 2.88a3 3 0 004.24 0L17 14.49v4.59z"></path>
    </svg>
  );
};

UEnvelopeDownloadAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeDownloadAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeDownloadAlt;
