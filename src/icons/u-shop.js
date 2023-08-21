import React from 'react';
import PropTypes from 'prop-types';

const UShop = props => {
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
      <path d="M22 5H2a1 1 0 00-1 1v4a3 3 0 002 2.82V22a1 1 0 001 1h16a1 1 0 001-1v-9.18A3 3 0 0023 10V6a1 1 0 00-1-1zm-7 2h2v3a1 1 0 01-2 0V7zm-4 0h2v3a1 1 0 01-2 0V7zM7 7h2v3a1 1 0 11-2 0V7zm-3 4a1 1 0 01-1-1V7h2v3a1 1 0 01-1 1zm10 10h-4v-2a2 2 0 014 0v2zm5 0h-3v-2a4 4 0 10-8 0v2H5v-8.18a3.17 3.17 0 001-.6 3 3 0 004 0 3 3 0 004 0 3 3 0 004 0c.293.26.632.464 1 .6V21zm2-11a1 1 0 01-2 0V7h2v3zM4.3 3H20a1 1 0 100-2H4.3a1 1 0 000 2z"></path>
    </svg>
  );
};

UShop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShop;
