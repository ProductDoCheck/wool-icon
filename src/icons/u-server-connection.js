import React from 'react';
import PropTypes from 'prop-types';

const UServerConnection = props => {
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
      <path d="M11 13a1 1 0 100 2 1 1 0 000-2zm-4 0a1 1 0 100 2 1 1 0 000-2zm15-9a3 3 0 00-3-3H5a3 3 0 00-3 3v4a3 3 0 00.78 2A3 3 0 002 12v4a3 3 0 003 3h6v2H3a1 1 0 000 2h18a1 1 0 000-2h-8v-2h6a3 3 0 003-3v-4a3 3 0 00-.78-2A3 3 0 0022 8V4zm-2 12a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h14a1 1 0 011 1v4zm0-8a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1h14a1 1 0 011 1v4zm-9-3a1 1 0 100 2 1 1 0 000-2zM7 5a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UServerConnection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UServerConnection.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UServerConnection;
