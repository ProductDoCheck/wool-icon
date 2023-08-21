import React from 'react';
import PropTypes from 'prop-types';

const UMoneyWithdrawal = props => {
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
      <path d="M22 2H2a1 1 0 00-1 1v8a1 1 0 001 1h3v9a1 1 0 001 1h12a1 1 0 001-1v-9h3a1 1 0 001-1V3a1 1 0 00-1-1zM7 20v-2a2 2 0 012 2H7zm10 0h-2a2 2 0 012-2v2zm0-4a4 4 0 00-4 4h-2a4 4 0 00-4-4V8h10v8zm4-6h-2V7a1 1 0 00-1-1H6a1 1 0 00-1 1v3H3V4h18v6zm-9 5a3 3 0 100-5.999A3 3 0 0012 15zm0-4a1 1 0 110 2 1 1 0 010-2z"></path>
    </svg>
  );
};

UMoneyWithdrawal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoneyWithdrawal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoneyWithdrawal;
