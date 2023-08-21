import React from 'react';
import PropTypes from 'prop-types';

const UBill = props => {
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
      <path d="M9.5 10.5H12a1 1 0 000-2h-1V8a1 1 0 10-2 0v.55a2.5 2.5 0 00.5 4.95h1a.5.5 0 010 1H8a1 1 0 000 2h1v.5a1 1 0 102 0v-.55a2.5 2.5 0 00-.5-4.95h-1a.5.5 0 010-1zM21 12h-3V3a1 1 0 00-1.5-.87l-3 1.72-3-1.72a1 1 0 00-1 0l-3 1.72-3-1.72A1 1 0 002 3v16a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zM5 20a1 1 0 01-1-1V4.73l2 1.14a1.08 1.08 0 001 0l3-1.72 3 1.72a1.08 1.08 0 001 0l2-1.14V19a3 3 0 00.18 1H5zm15-1a1 1 0 11-2 0v-5h2v5z"></path>
    </svg>
  );
};

UBill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBill;
