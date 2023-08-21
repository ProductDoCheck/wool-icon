import React from 'react';
import PropTypes from 'prop-types';

const UShoppingBasket = props => {
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
      <path d="M14 18a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zm-4 0a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zm9-12h-1.38l-1.73-3.45a1 1 0 10-1.78.9L15.38 6H8.62l1.27-2.55a1 1 0 00-1.78-.9L6.38 6H5a3 3 0 00-.92 5.84l.74 7.46a3 3 0 003 2.7h8.38a3 3 0 003-2.7l.74-7.46A3 3 0 0019 6zm-1.81 13.1a1 1 0 01-1 .9H7.81a1 1 0 01-1-.9L6.1 12h11.8l-.71 7.1zM19 10H5a1 1 0 110-2h14a1 1 0 010 2z"></path>
    </svg>
  );
};

UShoppingBasket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShoppingBasket.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShoppingBasket;
