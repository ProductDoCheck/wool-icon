import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeShare = props => {
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
      <path d="M20 14a1 1 0 00-1 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V9.41l5.88 5.89a3 3 0 002.11.87 3.08 3.08 0 002.16-.9l1.72-1.72a1.004 1.004 0 00-1.42-1.42l-1.75 1.75a1 1 0 01-1.4 0L4.41 8H10a1 1 0 100-2H4a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm0-6a2 2 0 00-1.18.39l-1.75-.8L19 6.71A2 2 0 0020 7a2 2 0 10-2-2l-1.9.87A2 2 0 0015 5.5a2 2 0 000 4c.322 0 .639-.082.92-.24l2.1 1A2 2 0 1020 8z"></path>
    </svg>
  );
};

UEnvelopeShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeShare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeShare;
