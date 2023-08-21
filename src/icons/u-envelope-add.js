import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeAdd = props => {
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
      <path d="M17 7h1v1a1 1 0 002 0V7h1a1 1 0 100-2h-1V4a1 1 0 00-2 0v1h-1a1 1 0 100 2zm4 4a1 1 0 00-1 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V8.41l5.88 5.89a3 3 0 004.24 0l2.47-2.47a1.004 1.004 0 10-1.42-1.42l-2.47 2.47a1 1 0 01-1.4 0L5.41 7H13a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UEnvelopeAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeAdd;
