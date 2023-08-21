import React from 'react';
import PropTypes from 'prop-types';

const UClipboardBlank = props => {
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
      <path d="M17 4h-1a2 2 0 00-2-2h-4a2 2 0 00-2 2H7a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-7 0h4v2h-4V4zm8 15a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h1a2 2 0 002 2h4a2 2 0 002-2h1a1 1 0 011 1v12z"></path>
    </svg>
  );
};

UClipboardBlank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClipboardBlank.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClipboardBlank;