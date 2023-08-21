import React from 'react';
import PropTypes from 'prop-types';

const FiShoppingCart = props => {
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
      <path d="M20 22a1 1 0 100-2 1 1 0 000 2z"></path>
      <path d="M9 22a1 1 0 100-2 1 1 0 000 2z"></path>
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
    </svg>
  );
};

FiShoppingCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiShoppingCart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiShoppingCart;
