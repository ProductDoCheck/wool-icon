import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeUploadAlt = props => {
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
      <path d="M16 11.08H8a3 3 0 00-3 3v5a3 3 0 003 3h8a3 3 0 003-3v-5a3 3 0 00-3-3zm-.42 2L12.7 16a1 1 0 01-1.4 0l-2.88-2.92h7.16zm1.42 6a1 1 0 01-1 1H8a1 1 0 01-1-1v-4.59l2.88 2.88a3 3 0 004.24 0L17 14.49v4.59zM10.71 5.62l.29-.29v2.75a1 1 0 002 0V5.33l.29.29a1 1 0 101.42-1.41l-2-2a1 1 0 00-1.42 0l-2 2a1 1 0 101.42 1.41z"></path>
    </svg>
  );
};

UEnvelopeUploadAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeUploadAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeUploadAlt;
