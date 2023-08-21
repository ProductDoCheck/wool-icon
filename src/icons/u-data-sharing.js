import React from 'react';
import PropTypes from 'prop-types';

const UDataSharing = props => {
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
      <path d="M20.52 3.87a5 5 0 00-9.08.13H7a3 3 0 00-3 3v4a1 1 0 002 0V7a1 1 0 011-1h2.78A3 3 0 009 8a3 3 0 003 3h7.33a3.66 3.66 0 001.19-7.13zM19.33 9H12a1 1 0 110-2 1 1 0 001-1 3 3 0 015.84-1 1 1 0 00.78.67A1.65 1.65 0 0121 7.33 1.67 1.67 0 0119.33 9zM19 13a1 1 0 00-1 1v3a1 1 0 01-1 1h-2.26a3.661 3.661 0 00-2.22-2.13 5 5 0 00-9.45 1.28A3 3 0 004 23h7.33a3.66 3.66 0 003.6-3H17a3 3 0 003-3v-3a1 1 0 00-1-1zm-7.67 8H4a1 1 0 010-2 1 1 0 001-1 3 3 0 015.84-1 1 1 0 00.78.67A1.65 1.65 0 0113 19.33 1.67 1.67 0 0111.33 21z"></path>
    </svg>
  );
};

UDataSharing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDataSharing.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDataSharing;