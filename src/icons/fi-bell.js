import React from 'react';
import PropTypes from 'prop-types';

const FiBell = props => {
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
      <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9z"></path>
      <path d="M13.73 21a1.999 1.999 0 01-3.46 0"></path>
    </svg>
  );
};

FiBell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiBell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiBell;
