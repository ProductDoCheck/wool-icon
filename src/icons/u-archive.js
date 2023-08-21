import React from 'react';
import PropTypes from 'prop-types';

const UArchive = props => {
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
      <path d="M10 14h4a1 1 0 000-2h-4a1 1 0 000 2zm9-11H5a3 3 0 00-3 3v3a1 1 0 001 1h1v8a3 3 0 003 3h10a3 3 0 003-3v-8h1a1 1 0 001-1V6a3 3 0 00-3-3zm-1 15a1 1 0 01-1 1H7a1 1 0 01-1-1v-8h12v8zm2-10H4V6a1 1 0 011-1h14a1 1 0 011 1v2z"></path>
    </svg>
  );
};

UArchive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArchive.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArchive;
