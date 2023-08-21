import React from 'react';
import PropTypes from 'prop-types';

const FiBold = props => {
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
      <path d="M6 12h9a4 4 0 110 8H6v-8z"></path>
      <path d="M6 4h8a4 4 0 110 8H6V4z"></path>
    </svg>
  );
};

FiBold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiBold.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiBold;
