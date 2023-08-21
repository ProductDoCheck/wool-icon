import React from 'react';
import PropTypes from 'prop-types';

const ULuggageCart = props => {
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
      <path d="M2 13.5v2a1 1 0 001 1h10a3 3 0 006 0h2a1 1 0 001-1v-8a3 3 0 00-3-3H9a3 3 0 00-3 3v7H4v-1a1 1 0 10-2 0zm13 3a1 1 0 112 0 1 1 0 01-2 0zm-7-6h12v4h-1.78a3 3 0 00-4.44 0H8v-4zm0-3a1 1 0 011-1h10a1 1 0 011 1v1H8v-1z"></path>
    </svg>
  );
};

ULuggageCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULuggageCart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULuggageCart;
