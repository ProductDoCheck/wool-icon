import React from 'react';
import PropTypes from 'prop-types';

const UDollarAlt = props => {
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
      <path d="M14 11h-1V7h2a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-2V3a1 1 0 00-2 0v2h-1a4 4 0 000 8h1v4H9a1 1 0 01-1-1 1 1 0 10-2 0 3 3 0 003 3h2v2a1 1 0 002 0v-2h1a4 4 0 100-8zm-3 0h-1a2 2 0 110-4h1v4zm3 6h-1v-4h1a2 2 0 010 4z"></path>
    </svg>
  );
};

UDollarAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDollarAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDollarAlt;
