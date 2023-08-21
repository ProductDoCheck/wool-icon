import React from 'react';
import PropTypes from 'prop-types';

const ULaptop = props => {
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
      <path d="M21 14h-1V7a3 3 0 00-3-3H7a3 3 0 00-3 3v7H3a1 1 0 00-1 1v2a3 3 0 003 3h14a3 3 0 003-3v-2a1 1 0 00-1-1zM6 7a1 1 0 011-1h10a1 1 0 011 1v7H6V7zm14 10a1 1 0 01-1 1H5a1 1 0 01-1-1v-1h16v1z"></path>
    </svg>
  );
};

ULaptop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULaptop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULaptop;
