import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeEdit = props => {
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
      <path d="M14 11.51h2.42a.998.998 0 00.71-.29l4.58-4.58a1.001 1.001 0 000-1.42L19.29 2.8a1 1 0 00-1.42 0l-4.58 4.58a1.05 1.05 0 00-.29.71v2.42a1 1 0 001 1zm1-3l3.58-3.58 1 1L16 9.51h-1v-1zm6 2a1 1 0 00-1 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V8.9l5.88 5.89a3 3 0 004.27 0 1 1 0 10-1.43-1.4 1 1 0 01-1.4 0l-5.91-5.9H10a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-7a1 1 0 00-1-1v.02z"></path>
    </svg>
  );
};

UEnvelopeEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeEdit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeEdit;
