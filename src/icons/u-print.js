import React from 'react';
import PropTypes from 'prop-types';

const UPrint = props => {
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
      <path d="M7 10a1 1 0 100 2 1 1 0 000-2zm12-4h-1V3a1 1 0 00-1-1H7a1 1 0 00-1 1v3H5a3 3 0 00-3 3v6a3 3 0 003 3h1v3a1 1 0 001 1h10a1 1 0 001-1v-3h1a3 3 0 003-3V9a3 3 0 00-3-3zM8 4h8v2H8V4zm8 16H8v-4h8v4zm4-5a1 1 0 01-1 1h-1v-1a1 1 0 00-1-1H7a1 1 0 00-1 1v1H5a1 1 0 01-1-1V9a1 1 0 011-1h14a1 1 0 011 1v6z"></path>
    </svg>
  );
};

UPrint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPrint.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPrint;
