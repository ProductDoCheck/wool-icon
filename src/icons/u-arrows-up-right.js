import React from 'react';
import PropTypes from 'prop-types';

const UArrowsUpRight = props => {
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
      <path d="M20.92 16.62a1 1 0 00-.21-.33l-3-3a1.004 1.004 0 10-1.42 1.42l1.3 1.29H9a1 1 0 01-1-1V6.41l1.29 1.3a1 1 0 001.42 0 .998.998 0 000-1.42l-3-3a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-3 3a1.004 1.004 0 001.42 1.42L6 6.41V15a3 3 0 003 3h8.59l-1.3 1.29a1.002 1.002 0 00.325 1.639.999.999 0 001.095-.219l3-3a.999.999 0 00.21-.33 1 1 0 000-.76z"></path>
    </svg>
  );
};

UArrowsUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowsUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowsUpRight;
