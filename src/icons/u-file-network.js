import React from 'react';
import PropTypes from 'prop-types';

const UFileNetwork = props => {
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
      <path d="M21 19h-6.18A3 3 0 0013 17.18V15h3a3 3 0 003-3V8v-.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H8a3 3 0 00-3 3v8a3 3 0 003 3h3v2.18A3 3 0 009.18 19H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zM13 4.41L15.59 7H14a1 1 0 01-1-1V4.41zM8 13a1 1 0 01-1-1V4a1 1 0 011-1h3v3a3 3 0 003 3h3v3a1 1 0 01-1 1H8zm4 8a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UFileNetwork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileNetwork.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileNetwork;
