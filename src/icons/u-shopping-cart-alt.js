import React from 'react';
import PropTypes from 'prop-types';

const UShoppingCartAlt = props => {
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
      <path d="M21.5 15a3 3 0 00-1.9-2.78l1.87-7a1 1 0 00-.18-.87A1 1 0 0020.5 4H6.8l-.33-1.26A1 1 0 005.5 2h-2v2h1.23l2.48 9.26a1 1 0 001 .74H18.5a1 1 0 010 2h-13a1 1 0 000 2h1.18a3 3 0 105.64 0h2.36a3 3 0 105.42-.47A3 3 0 0021.5 15zm-3.91-3H9L7.34 6H19.2l-1.61 6zM9.5 20a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UShoppingCartAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShoppingCartAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShoppingCartAlt;
