import React from 'react';
import PropTypes from 'prop-types';

const UServerNetwork = props => {
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
      <path d="M8 6a1 1 0 100-2 1 1 0 000 2zm13 13h-6.18A3 3 0 0013 17.18V15h4a3 3 0 003-3v-2a3 3 0 00-.78-2A3 3 0 0020 6V4a3 3 0 00-3-3H7a3 3 0 00-3 3v2a3 3 0 00.78 2A3 3 0 004 10v2a3 3 0 003 3h4v2.18A3 3 0 009.18 19H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zM6 4a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm1 9a1 1 0 01-1-1v-2a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H7zm5 8a1 1 0 110-2 1 1 0 010 2zM8 10a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UServerNetwork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UServerNetwork.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UServerNetwork;
