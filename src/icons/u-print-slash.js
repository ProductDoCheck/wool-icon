import React from 'react';
import PropTypes from 'prop-types';

const UPrintSlash = props => {
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
      <path d="M7 10a1 1 0 100 2.001A1 1 0 007 10zM3.71 2.29a1.004 1.004 0 10-1.42 1.42L4.62 6A3 3 0 002 9v6a3 3 0 003 3h1v3a1 1 0 001 1h10a1 1 0 001-1v-1.59l2.29 2.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-18-18zM6 15v1H5a1 1 0 01-1-1V9a1 1 0 011-1h1.59l6 6H7a1 1 0 00-1 1zm10 5H8v-4h6.59L16 17.41V20zm3-14h-1V3a1 1 0 00-1-1H8.66a1 1 0 000 2H16v2h-3.34a1 1 0 100 2H19a1 1 0 011 1v6a.369.369 0 010 .11 1 1 0 00.78 1.18h.2a1 1 0 001-.8c.02-.162.027-.326.02-.49V9a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UPrintSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPrintSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPrintSlash;
