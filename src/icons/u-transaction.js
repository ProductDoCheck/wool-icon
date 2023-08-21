import React from 'react';
import PropTypes from 'prop-types';

const UTransaction = props => {
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
      <path d="M20 2H10a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zm1 10a1 1 0 01-1 1H10a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v7zm-3.5-4a1.49 1.49 0 00-1 .39 1.5 1.5 0 100 2.22 1.501 1.501 0 101-2.61zM16 17a1 1 0 00-1 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h1a1 1 0 000-2H3v-1a1 1 0 011-1 1 1 0 000-2 3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-1a1 1 0 00-1-1zM6 18h1a1 1 0 000-2H6a1 1 0 000 2z"></path>
    </svg>
  );
};

UTransaction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTransaction.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTransaction;