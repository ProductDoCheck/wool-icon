import React from 'react';
import PropTypes from 'prop-types';

const UBitcoinCircle = props => {
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
      <path d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 20a9 9 0 110-18 9 9 0 010 18zm2-14V6a1 1 0 00-2 0v1h-1V6a1 1 0 00-2 0v1H8a1 1 0 000 2h1v6H8a1 1 0 000 2h1v1a1 1 0 102 0v-1h1v1a1 1 0 002 0v-1a3 3 0 003-3 3 3 0 00-.77-2 3 3 0 00.77-2 3 3 0 00-3-3zm0 8h-3v-2h3a1 1 0 010 2zm0-4h-3V9h3a1 1 0 110 2z"></path>
    </svg>
  );
};

UBitcoinCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBitcoinCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBitcoinCircle;
