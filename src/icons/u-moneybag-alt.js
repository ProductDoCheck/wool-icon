import React from 'react';
import PropTypes from 'prop-types';

const UMoneybagAlt = props => {
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
      <path d="M19 7h-3V6a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4V6zm-6 4a1 1 0 011-1h1a2 2 0 01-2 2v-1zm1 9a1 1 0 01-1-1v-1a2 2 0 012 2H5zm15-1a1 1 0 01-1 1h-1a2 2 0 012-2v1zm0-3a4 4 0 00-4 4H8a4 4 0 00-4-4v-2a4 4 0 004-4h8a4 4 0 004 4v2zm0-4a2 2 0 01-2-2h1a1 1 0 011 1v1zm-8 0a3 3 0 100 5.999A3 3 0 0012 11zm0 4a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UMoneybagAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoneybagAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoneybagAlt;
