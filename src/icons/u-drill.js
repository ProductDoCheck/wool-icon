import React from 'react';
import PropTypes from 'prop-types';

const UDrill = props => {
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
      <path d="M19 4H9a1 1 0 00-1 1v2H3a1 1 0 000 2h5v4a1 1 0 102 0v-1h4v7a1 1 0 001 1h2a3 3 0 003-3v-5.18A3 3 0 0022 9V7a3 3 0 00-3-3zm-1 13a1 1 0 01-1 1h-1v-6h2v5zm2-8a1 1 0 01-1 1h-9V6h6v1a1 1 0 002 0V6h1a1 1 0 011 1v2z"></path>
    </svg>
  );
};

UDrill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDrill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDrill;
