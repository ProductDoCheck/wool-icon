import React from 'react';
import PropTypes from 'prop-types';

const UBrowser = props => {
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
      <path d="M19 2H9a3 3 0 00-3 3v1H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3v-1h1a3 3 0 003-3V5a3 3 0 00-3-3zm-3 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h12v7zm0-9H4V9a1 1 0 011-1h10a1 1 0 011 1v1zm4 5a1 1 0 01-1 1h-1V9a3 3 0 00-.18-1H20v7zm0-9H8V5a1 1 0 011-1h10a1 1 0 011 1v1z"></path>
    </svg>
  );
};

UBrowser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBrowser.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBrowser;
