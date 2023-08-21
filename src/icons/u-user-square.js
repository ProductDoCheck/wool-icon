import React from 'react';
import PropTypes from 'prop-types';

const UUserSquare = props => {
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
      <path d="M14.81 12.28a3.73 3.73 0 001-2.5 3.78 3.78 0 10-7.56 0 3.73 3.73 0 001 2.5A5.94 5.94 0 006 16.89a1.006 1.006 0 102 .22 4 4 0 017.94 0A1 1 0 0017 18h.11a1 1 0 00.88-1.1 5.94 5.94 0 00-3.18-4.62zM12 11.56A1.78 1.78 0 1112 8a1.78 1.78 0 010 3.56zM19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v14z"></path>
    </svg>
  );
};

UUserSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUserSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUserSquare;