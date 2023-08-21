import React from 'react';
import PropTypes from 'prop-types';

const UBagSlash = props => {
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
      <path d="M19 6h-3V5a2 2 0 00-2-2h-4a1.86 1.86 0 00-.61.1 1 1 0 00-.64 1.27A1 1 0 0010 5h4v1h-1.34a1 1 0 100 2H19a1 1 0 011 1v1.28l-2.57.86a1 1 0 00.32 1.95 1.19 1.19 0 00.32-.05l1.93-.65v2.95a1 1 0 002 0V9a3 3 0 00-3-3zM3.71 2.29a1.004 1.004 0 10-1.42 1.42L4.62 6A3 3 0 002 9v9a3 3 0 003 3h14c.178-.005.355-.025.53-.06l.76.77a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-18-18zM4 9a1 1 0 011-1h1.59l4 4H9.16L4 10.28V9zm1 10a1 1 0 01-1-1v-5.61L8.68 14c.106.014.214.014.32 0h3.59l5 5H5z"></path>
    </svg>
  );
};

UBagSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBagSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBagSlash;
