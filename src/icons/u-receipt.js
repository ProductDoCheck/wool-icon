import React from 'react';
import PropTypes from 'prop-types';

const UReceipt = props => {
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
      <path d="M9 12H7a1 1 0 000 2h2a1 1 0 100-2zm-1-2h4a1 1 0 100-2H8a1 1 0 100 2zm1 6H7a1 1 0 000 2h2a1 1 0 100-2zm12-4h-3V3a1 1 0 00-1.5-.87l-3 1.72-3-1.72a1 1 0 00-1 0l-3 1.72-3-1.72A1 1 0 002 3v16a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zM5 20a1 1 0 01-1-1V4.73l2 1.14a1.08 1.08 0 001 0l3-1.72 3 1.72a1.08 1.08 0 001 0l2-1.14V19a3 3 0 00.18 1H5zm15-1a1 1 0 11-2 0v-5h2v5zm-6.44-2.83a.762.762 0 00-.18-.09.602.602 0 00-.19-.06 1 1 0 00-.9.27A1.05 1.05 0 0012 17a1 1 0 00.07.38c.054.122.129.233.22.33.097.088.209.16.33.21a.94.94 0 00.76 0 1.15 1.15 0 00.33-.21A1 1 0 0014 17a1.05 1.05 0 00-.29-.71 1.573 1.573 0 00-.15-.12zm.14-3.88a1 1 0 00-1.62.33A1 1 0 0013 14a1 1 0 001-1 1.001 1.001 0 00-.08-.38.91.91 0 00-.22-.33z"></path>
    </svg>
  );
};

UReceipt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UReceipt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UReceipt;
