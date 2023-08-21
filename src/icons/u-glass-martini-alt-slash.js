import React from 'react';
import PropTypes from 'prop-types';

const UGlassMartiniAltSlash = props => {
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
      <path d="M19.71 16.29l-14-14a1.004 1.004 0 00-1.42 1.42L6.59 6H5a1 1 0 00-.9.57 1 1 0 00.12 1L11 16.1V20H6.75a1 1 0 000 2h10.5a1 1 0 000-2H13v-3.9l1.64-2 3.65 3.65a1.002 1.002 0 001.42 0 .999.999 0 000-1.46zM7.08 8h1.51l1.89 1.89H8.59L7.08 8zM12 14.15l-1.81-2.26h2.29l.74.74L12 14.15zM14.66 8h2.26l-.63.79a1 1 0 00.15 1.4 1 1 0 00.63.22 1 1 0 00.78-.37l1.93-2.42a1 1 0 00.12-1A1 1 0 0019 6h-4.34a1 1 0 100 2z"></path>
    </svg>
  );
};

UGlassMartiniAltSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGlassMartiniAltSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGlassMartiniAltSlash;
