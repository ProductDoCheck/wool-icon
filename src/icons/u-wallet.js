import React from 'react';
import PropTypes from 'prop-types';

const UWallet = props => {
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
      <path d="M19 7h-1V6a3 3 0 00-3-3H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3zM5 5h10a1 1 0 011 1v1H5a1 1 0 010-2zm15 10h-1a1 1 0 010-2h1v2zm0-4h-1a3 3 0 000 6h1v1a1 1 0 01-1 1H5a1 1 0 01-1-1V8.83A3 3 0 005 9h14a1 1 0 011 1v1z"></path>
    </svg>
  );
};

UWallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWallet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWallet;
