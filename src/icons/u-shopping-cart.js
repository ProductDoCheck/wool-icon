import React from 'react';
import PropTypes from 'prop-types';

const UShoppingCart = props => {
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
      <path d="M21 16H7a1 1 0 010-2h10.44a3 3 0 002.91-2.27L22 5.24a1 1 0 00-.18-.86A1 1 0 0021 4H6.76a3 3 0 00-2.82-2H3a1 1 0 000 2h.94a1 1 0 011 .76l.06.48L6.73 12A3.003 3.003 0 107 18h.18a3 3 0 105.64 0h2.36a3 3 0 105.64 0H21a1 1 0 000-2zM19.72 6l-1.31 5.24a1 1 0 01-1 .76H8.78l-1.5-6h12.44zM10 20a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UShoppingCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShoppingCart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShoppingCart;