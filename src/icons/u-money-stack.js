import React from 'react';
import PropTypes from 'prop-types';

const UMoneyStack = props => {
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
      <path d="M22 17H2a1 1 0 000 2h20a1 1 0 000-2zm0 4H2a1 1 0 000 2h20a1 1 0 000-2zM6 7a1 1 0 100 2 1 1 0 000-2zm14-6H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v8zm-9-7a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2zm6-2a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UMoneyStack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoneyStack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoneyStack;
