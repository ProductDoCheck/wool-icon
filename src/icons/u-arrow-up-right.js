import React from 'react';
import PropTypes from 'prop-types';

const UArrowUpRight = props => {
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
      <path d="M17.92 6.62a1 1 0 00-.54-.54A1 1 0 0017 6H7a1 1 0 000 2h7.59l-8.3 8.29a1 1 0 00.325 1.639 1 1 0 001.095-.219L16 9.41V17a1 1 0 002 0V7a.997.997 0 00-.08-.38z"></path>
    </svg>
  );
};

UArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowUpRight;
