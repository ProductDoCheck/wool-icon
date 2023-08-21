import React from 'react';
import PropTypes from 'prop-types';

const UBitcoinAlt = props => {
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
      <path d="M16.304 11.241a3.997 3.997 0 00-3.312-6.239v-1a1 1 0 00-2 0v1h-2v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v10h-1a1 1 0 000 2h1v1a1 1 0 102 0v-1h2v1a1 1 0 002 0v-1h2a3.99 3.99 0 001.312-7.76zM8.992 7.002h4a2 2 0 010 4h-4v-4zm6 10h-6v-4h6a2 2 0 010 4z"></path>
    </svg>
  );
};

UBitcoinAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBitcoinAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBitcoinAlt;
