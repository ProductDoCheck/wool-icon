import React from 'react';
import PropTypes from 'prop-types';

const UTopArrowToTop = props => {
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
      <path d="M12.71 6.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-4 4a1.003 1.003 0 101.42 1.42L11 9.41V21a1 1 0 002 0V9.41l2.29 2.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-4-4zM19 2H5a1 1 0 000 2h14a1 1 0 100-2z"></path>
    </svg>
  );
};

UTopArrowToTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTopArrowToTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTopArrowToTop;
