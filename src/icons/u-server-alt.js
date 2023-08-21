import React from 'react';
import PropTypes from 'prop-types';

const UServerAlt = props => {
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
      <path d="M8 17a1 1 0 100 2 1 1 0 000-2zm0-6a1 1 0 100 2 1 1 0 000-2zm0-6a1 1 0 100 2 1 1 0 000-2zm12 0a3 3 0 00-3-3H7a3 3 0 00-3 3v2a3 3 0 00.78 2A3 3 0 004 11v2a3 3 0 00.78 2A3 3 0 004 17v2a3 3 0 003 3h10a3 3 0 003-3v-2a3 3 0 00-.78-2 3 3 0 00.78-2v-2a3 3 0 00-.78-2A3 3 0 0020 7V5zm-2 14a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1h10a1 1 0 011 1v2zm0-6a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1h10a1 1 0 011 1v2zm0-6a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v2z"></path>
    </svg>
  );
};

UServerAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UServerAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UServerAlt;
