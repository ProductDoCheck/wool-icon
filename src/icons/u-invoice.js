import React from 'react';
import PropTypes from 'prop-types';

const UInvoice = props => {
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
      <path d="M13 16H7a1 1 0 000 2h6a1 1 0 100-2zm-4-6h2a1 1 0 100-2H9a1 1 0 100 2zm12 2h-3V3a1 1 0 00-1.5-.87l-3 1.72-3-1.72a1 1 0 00-1 0l-3 1.72-3-1.72A1 1 0 002 3v16a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zM5 20a1 1 0 01-1-1V4.73l2 1.14a1.08 1.08 0 001 0l3-1.72 3 1.72a1.08 1.08 0 001 0l2-1.14V19a3 3 0 00.18 1H5zm15-1a1 1 0 01-2 0v-5h2v5zm-7-7H7a1 1 0 000 2h6a1 1 0 100-2z"></path>
    </svg>
  );
};

UInvoice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UInvoice.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UInvoice;
