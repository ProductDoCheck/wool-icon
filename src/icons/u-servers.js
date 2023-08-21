import React from 'react';
import PropTypes from 'prop-types';

const UServers = props => {
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
      <path d="M15 17a1 1 0 100 2 1 1 0 000-2zm-4 0H9a1 1 0 000 2h2a1 1 0 000-2zm0-6H9a1 1 0 000 2h2a1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm8-3a3 3 0 00-3-3h-1a3 3 0 00-3-3H8a3 3 0 00-3 3H4a3 3 0 00-3 3v2a3 3 0 00.78 2A3 3 0 001 14v2a3 3 0 003 3h1a3 3 0 003 3h8a3 3 0 003-3h1a3 3 0 003-3v-2a3 3 0 00-.78-2 3 3 0 00.78-2V8zM5 17H4a1 1 0 01-1-1v-2a1 1 0 011-1h1a3 3 0 00.78 2A3 3 0 005 17zm0-6H4a1 1 0 01-1-1V8a1 1 0 011-1h1a3 3 0 00.78 2A3 3 0 005 11zm12 8a1 1 0 01-1 1H8a1 1 0 01-1-1v-2a1 1 0 011-1h8a1 1 0 011 1v2zm0-6a1 1 0 01-1 1H8a1 1 0 01-1-1v-2a1 1 0 011-1h8a1 1 0 011 1v2zm0-6a1 1 0 01-1 1H8a1 1 0 01-1-1V5a1 1 0 011-1h8a1 1 0 011 1v2zm4 9a1 1 0 01-1 1h-1a3 3 0 00-.78-2 3 3 0 00.78-2h1a1 1 0 011 1v2zm0-6a1 1 0 01-1 1h-1a3 3 0 00-.78-2A3 3 0 0019 7h1a1 1 0 011 1v2zm-6-5a1 1 0 100 2 1 1 0 000-2zm-4 0H9a1 1 0 000 2h2a1 1 0 100-2z"></path>
    </svg>
  );
};

UServers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UServers.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UServers;
