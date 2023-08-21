import React from 'react';
import PropTypes from 'prop-types';

const UNotebooks = props => {
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
      <path d="M21 6a1 1 0 00-1 1v10a3 3 0 01-3 3H7a1 1 0 000 2h10a5 5 0 005-5V7a1 1 0 00-1-1zm-3 9V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3zM10 4h2v4.86l-.36-.3a1 1 0 00-1.28 0l-.36.3V4zM4 15V5a1 1 0 011-1h3v7a1 1 0 001.65.76L11 10.63l1.35 1.13A1 1 0 0014 11V4h1a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1z"></path>
    </svg>
  );
};

UNotebooks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UNotebooks.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UNotebooks;
