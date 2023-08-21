import React from 'react';
import PropTypes from 'prop-types';

const UFileImport = props => {
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
      <path d="M11 20H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v2a1 1 0 002 0V9v-.06a1.307 1.307 0 00-.06-.27v-.09a1.32 1.32 0 00-.19-.29l-6-6a1.32 1.32 0 00-.29-.19.32.32 0 00-.09 0l-.31-.1H6a3 3 0 00-3 3v14a3 3 0 003 3h5a1 1 0 000-2zm2-14.59L15.59 8H14a1 1 0 01-1-1V5.41zM19 15h-5.59l1.3-1.29a1.004 1.004 0 10-1.42-1.42l-3 3a1.15 1.15 0 00-.21.33 1 1 0 000 .76.93.93 0 00.21.33l3 3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L13.41 17H19a1 1 0 000-2z"></path>
    </svg>
  );
};

UFileImport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileImport.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileImport;
