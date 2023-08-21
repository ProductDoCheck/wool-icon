import React from 'react';
import PropTypes from 'prop-types';

const FiShoppingBag = props => {
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
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z"></path>
      <path d="M16 10a4 4 0 11-8 0"></path>
      <path d="M3 6h18"></path>
    </svg>
  );
};

FiShoppingBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiShoppingBag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiShoppingBag;
