import React from 'react';
import PropTypes from 'prop-types';

const UFileMinusAlt = props => {
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
      <path d="M8 8a1 1 0 000 2h1a1 1 0 000-2H8zm5 12H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v5a1 1 0 002 0V9v-.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.29.29 0 00-.1 0 1.099 1.099 0 00-.31-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h7a1 1 0 000-2zm0-14.59L15.59 8H14a1 1 0 01-1-1V5.41zM20 18h-4a1 1 0 000 2h4a1 1 0 000-2zm-7-2H8a1 1 0 000 2h5a1 1 0 000-2zm1-4H8a1 1 0 000 2h6a1 1 0 000-2z"></path>
    </svg>
  );
};

UFileMinusAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileMinusAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileMinusAlt;
