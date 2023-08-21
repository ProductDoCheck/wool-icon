import React from 'react';
import PropTypes from 'prop-types';

const UBitcoinSign = props => {
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
      <path d="M19 9a4 4 0 00-4-4V3a1 1 0 00-2 0v2h-2V3a1 1 0 00-2 0v2H6a1 1 0 000 2h1v10H6a1 1 0 000 2h3v2a1 1 0 102 0v-2h2v2a1 1 0 002 0v-2a4 4 0 002.62-7A4 4 0 0019 9zm-4 8H9v-4h6a2 2 0 010 4zm0-6H9V7h6a2 2 0 010 4z"></path>
    </svg>
  );
};

UBitcoinSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBitcoinSign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBitcoinSign;