import React from 'react';
import PropTypes from 'prop-types';

const ULaptopConnection = props => {
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
      <path d="M21 18h-6.18A3 3 0 0013 16.18V13h7a1 1 0 000-2h-1V5a3 3 0 00-3-3H8a3 3 0 00-3 3v6H4a1 1 0 000 2h7v3.18A3 3 0 009.18 18H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zM7 11V5a1 1 0 011-1h8a1 1 0 011 1v6H7zm5 9a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

ULaptopConnection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULaptopConnection.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULaptopConnection;
