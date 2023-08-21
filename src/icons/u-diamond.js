import React from 'react';
import PropTypes from 'prop-types';

const UDiamond = props => {
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
      <path d="M20 10.35l-5.78-7.41A3.06 3.06 0 009.75 3L4 10.35A3.05 3.05 0 003.51 12 3.09 3.09 0 004 13.58l.06.07 5.74 7.41A3.001 3.001 0 0012 22a3.06 3.06 0 002.26-1L20 13.65a3 3 0 00-.06-3.3H20zm-1.57 2.14l-5.67 7.22a1.11 1.11 0 01-1.42.07l-5.69-7.31a1 1 0 01-.14-.47 1.11 1.11 0 01.1-.45l5.67-7.22a1.11 1.11 0 011.42-.07l5.63 7.28a1 1 0 01.16.54c-.007.142-.04.281-.1.41h.04z"></path>
    </svg>
  );
};

UDiamond.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDiamond.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDiamond;
