import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeReceive = props => {
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
      <path d="M8.29 6.21l2 2a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-.3-.29H15a1 1 0 100-2h-3.59l.3-.29A1.005 1.005 0 0011 2.496a1.004 1.004 0 00-.71.294l-2 2a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33zM16 10.5H8a3 3 0 00-3 3v5a3 3 0 003 3h8a3 3 0 003-3v-5a3 3 0 00-3-3zm-.42 2l-2.88 2.88a1 1 0 01-1.4 0L8.42 12.5h7.16zm1.42 6a1 1 0 01-1 1H8a1 1 0 01-1-1v-4.59l2.88 2.87a2.94 2.94 0 002.12.89 3 3 0 002.12-.88L17 13.91v4.59z"></path>
    </svg>
  );
};

UEnvelopeReceive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeReceive.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeReceive;
