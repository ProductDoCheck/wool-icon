import React from 'react';
import PropTypes from 'prop-types';

const UAutoFlash = props => {
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
      <path d="M17.87 8.6A1 1 0 0017 8h-4.58l1.27-4.74A1 1 0 0012.72 2h-7a1 1 0 00-1 .74l-2.68 10a1 1 0 001 1.26h3.85l-1.81 6.74a1 1 0 001.71.93l10.9-12a1 1 0 00.18-1.07zm-9.79 8.68l1.08-4a1 1 0 00-.16-.89 1 1 0 00-.81-.39H4.35l2.14-8h4.93l-1.27 4.74a1 1 0 001 1.26h3.57l-6.64 7.28zM19 13h-1a3 3 0 00-3 3v5a1 1 0 002 0v-2h3v2a1 1 0 002 0v-5a3 3 0 00-3-3zm1 4h-3v-1a1 1 0 011-1h1a1 1 0 011 1v1z"></path>
    </svg>
  );
};

UAutoFlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAutoFlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAutoFlash;
