import React from 'react';
import PropTypes from 'prop-types';

const UBag = props => {
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
      <path d="M19 6h-3V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zm-9-1h4v1h-4V5zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.61L8.68 14c.106.014.214.014.32 0h6a1.19 1.19 0 00.32-.05L20 12.39V18zm0-7.72L14.84 12H9.16L4 10.28V9a1 1 0 011-1h14a1 1 0 011 1v1.28z"></path>
    </svg>
  );
};

UBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBag;
