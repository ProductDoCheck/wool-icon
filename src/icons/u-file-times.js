import React from 'react';
import PropTypes from 'prop-types';

const UFileTimes = props => {
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
      <path d="M14.71 12.29a1.002 1.002 0 00-1.42 0L12 13.59l-1.29-1.3a1.004 1.004 0 10-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l1.29-1.3 1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L13.41 15l1.3-1.29a1.002 1.002 0 000-1.42zM20 8.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.1a1.099 1.099 0 00-.31-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1V5.41zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v9z"></path>
    </svg>
  );
};

UFileTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileTimes;
