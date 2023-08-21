import React from 'react';
import PropTypes from 'prop-types';

const UFileUpload = props => {
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
      <path d="M12.71 11.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2 2a1.004 1.004 0 001.42 1.42l.29-.3V17a1 1 0 002 0v-2.59l.29.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-2-2zM20 8.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.1a1.099 1.099 0 00-.31-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1V5.41zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v9z"></path>
    </svg>
  );
};

UFileUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileUpload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileUpload;
