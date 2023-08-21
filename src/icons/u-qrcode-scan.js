import React from 'react';
import PropTypes from 'prop-types';

const UQrcodeScan = props => {
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
      <path d="M8 21H4a1 1 0 01-1-1v-4a1 1 0 10-2 0v4a3 3 0 003 3h4a1 1 0 000-2zm14-6a1 1 0 00-1 1v4a1 1 0 01-1 1h-4a1 1 0 000 2h4a3 3 0 003-3v-4a1 1 0 00-1-1zM20 1h-4a1 1 0 100 2h4a1 1 0 011 1v4a1 1 0 002 0V4a3 3 0 00-3-3zM2 9a1 1 0 001-1V4a1 1 0 011-1h4a1 1 0 000-2H4a3 3 0 00-3 3v4a1 1 0 001 1zm8-4H6a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1zM9 9H7V7h2v2zm5 2h4a1 1 0 001-1V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2v2h-2V7zm-5 6H6a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-1 4H7v-2h2v2zm5-1a1 1 0 001-1 1 1 0 000-2h-1a1 1 0 00-1 1v1a1 1 0 001 1zm4-3a1 1 0 00-1 1v3a1 1 0 000 2h1a1 1 0 001-1v-4a1 1 0 00-1-1zm-4 4a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UQrcodeScan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UQrcodeScan.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UQrcodeScan;
