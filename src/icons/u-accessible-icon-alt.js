import React from 'react';
import PropTypes from 'prop-types';

const UAccessibleIconAlt = props => {
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
      <path d="M16 7a2 2 0 100-4 2 2 0 000 4zm-3.3 11.4A4 4 0 119.05 12a1.006 1.006 0 00-.22-2 6.01 6.01 0 10.67 12 6.001 6.001 0 004.8-2.4 1 1 0 00-1.6-1.2zm6.8 1.6h-1v-5a1 1 0 00-1-1h-4.57l1.69-4.66v-.31c.005-.06.005-.12 0-.18a1.058 1.058 0 000-.19 1.4 1.4 0 00-.2-.32.638.638 0 00-.15-.13s0-.06-.08-.08L9.71 5.55h-.12a1.06 1.06 0 00-.19-.06H9a.8.8 0 00-.2.07h-.11L6 7.13A1 1 0 006.48 9 1 1 0 007 8.87l2.23-1.3 3.24 1.88-1.89 5.21a.873.873 0 000 .16c-.01.06-.01.12 0 .18.018.128.045.255.08.38l.11.15c.027.06.064.113.11.16.043.036.09.066.14.09.06.046.123.086.19.12.109.04.224.06.34.06h5v5a1 1 0 001 1h2a1 1 0 000-2l-.05.04z"></path>
    </svg>
  );
};

UAccessibleIconAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAccessibleIconAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAccessibleIconAlt;
