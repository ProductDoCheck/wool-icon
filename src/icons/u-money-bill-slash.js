import React from 'react';
import PropTypes from 'prop-types';

const UMoneyBillSlash = props => {
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
      <path d="M6 11a1 1 0 100 2.001A1 1 0 006 11zm5.86-1.55L4.71 2.29a1.004 1.004 0 10-1.42 1.42L4.59 5H4a3 3 0 00-3 3v8a3 3 0 003 3h14.59l2.7 2.71a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L11.86 9.45zm-.74 2.09l1.34 1.34A1 1 0 0112 13a1 1 0 01-1-1 1 1 0 01.12-.46zM4 17a1 1 0 01-1-1V8a1 1 0 011-1h2.59l3.1 3.1A3 3 0 009 12a3 3 0 003 3 3 3 0 001.9-.69L16.59 17H4zM20 5h-7.34a1 1 0 100 2H20a1 1 0 011 1v7.34a1 1 0 002 0V8a3 3 0 00-3-3zm-1 7a1 1 0 10-2 0 1 1 0 002 0z"></path>
    </svg>
  );
};

UMoneyBillSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoneyBillSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoneyBillSlash;