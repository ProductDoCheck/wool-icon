import React from 'react';
import PropTypes from 'prop-types';

const UMoneyBillStack = props => {
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
      <path d="M20 1H4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3zM8 21H4a1 1 0 01-1-1v-1.18A3 3 0 004 19h4v2zm0-4H4a1 1 0 01-1-1v-1.18A3 3 0 004 15h4v2zm0-4H4a1 1 0 01-1-1V4a1 1 0 011-1h4v10zm6 8h-4v-6h4v6zm0-8h-4V3h4v10zm7 7a1 1 0 01-1 1h-4v-2h4a3 3 0 001-.18V20zm0-4a1 1 0 01-1 1h-4v-2h4a3 3 0 001-.18V16zm0-4a1 1 0 01-1 1h-4V3h4a1 1 0 011 1v8zm-3-5a1 1 0 100 2 1 1 0 000-2zM6 9a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  );
};

UMoneyBillStack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoneyBillStack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoneyBillStack;
