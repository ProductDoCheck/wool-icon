import React from 'react';
import PropTypes from 'prop-types';

const UBed = props => {
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
      <path d="M7 12.5a3 3 0 100-6 3 3 0 000 6zm0-4a1 1 0 110 2 1 1 0 010-2zm13-2h-8a1 1 0 00-1 1v6H3v-8a1 1 0 00-2 0v13a1 1 0 102 0v-3h18v3a1 1 0 002 0v-9a3 3 0 00-3-3zm1 7h-8v-5h7a1 1 0 011 1v4z"></path>
    </svg>
  );
};

UBed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBed.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBed;
