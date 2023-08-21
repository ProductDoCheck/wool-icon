import React from 'react';
import PropTypes from 'prop-types';

const UMoneyBill = props => {
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
      <path d="M6 11a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2zm2-6H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h16a1 1 0 011 1v8zm-9-7a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UMoneyBill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoneyBill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoneyBill;
