import React from 'react';
import PropTypes from 'prop-types';

const UServer = props => {
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
      <path d="M15 17a1 1 0 100 2 1 1 0 000-2zm-6 0H6a1 1 0 000 2h3a1 1 0 000-2zm9 0a1 1 0 100 2 1 1 0 000-2zm-3-6a1 1 0 100 2 1 1 0 000-2zm-6 0H6a1 1 0 000 2h3a1 1 0 000-2zm9-6a1 1 0 100 2 1 1 0 000-2zm0 6a1 1 0 100 2 1 1 0 000-2zm4-6a3 3 0 00-3-3H5a3 3 0 00-3 3v2a3 3 0 00.78 2A3 3 0 002 11v2a3 3 0 00.78 2A3 3 0 002 17v2a3 3 0 003 3h14a3 3 0 003-3v-2a3 3 0 00-.78-2 3 3 0 00.78-2v-2a3 3 0 00-.78-2A3 3 0 0022 7V5zm-2 14a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h14a1 1 0 011 1v2zm0-6a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h14a1 1 0 011 1v2zm0-6a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v2zm-5-2a1 1 0 100 2 1 1 0 000-2zM9 5H6a1 1 0 000 2h3a1 1 0 000-2z"></path>
    </svg>
  );
};

UServer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UServer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UServer;
