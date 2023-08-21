import React from 'react';
import PropTypes from 'prop-types';

const UMonitor = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h2.64l-.58 1a2 2 0 001.75 3h6.46A2 2 0 0017 19l-.59-1H19a3 3 0 003-3V5a3 3 0 00-3-3zM8.77 20L10 18h4l1.2 2H8.77zM20 15a1 1 0 01-1 1H5a1 1 0 01-1-1v-1h16v1zm0-3H4V5a1 1 0 011-1h14a1 1 0 011 1v7z"></path>
    </svg>
  );
};

UMonitor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMonitor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMonitor;
