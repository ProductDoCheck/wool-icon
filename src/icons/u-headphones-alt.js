import React from 'react';
import PropTypes from 'prop-types';

const UHeadphonesAlt = props => {
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
      <path d="M20 13.18V11a8 8 0 00-16 0v2.18A3 3 0 002 16v2a3 3 0 003 3h3a1 1 0 001-1v-6a1 1 0 00-1-1H6v-2a6 6 0 1112 0v2h-2a1 1 0 00-1 1v6a1 1 0 001 1h3a3 3 0 003-3v-2a3 3 0 00-2-2.82zM7 15v4H5a1 1 0 01-1-1v-2a1 1 0 011-1h2zm13 3a1 1 0 01-1 1h-2v-4h2a1 1 0 011 1v2z"></path>
    </svg>
  );
};

UHeadphonesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeadphonesAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeadphonesAlt;
