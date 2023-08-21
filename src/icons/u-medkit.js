import React from 'react';
import PropTypes from 'prop-types';

const UMedkit = props => {
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
      <path d="M10 17h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2zm9-11h-2V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9V5zm11 14a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h16v7zm0-9H4V9a1 1 0 011-1h14a1 1 0 011 1v1z"></path>
    </svg>
  );
};

UMedkit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMedkit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMedkit;
