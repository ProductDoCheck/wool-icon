import React from 'react';
import PropTypes from 'prop-types';

const UFileExclamation = props => {
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
      <path d="M12.92 16.62a.762.762 0 00-.09-.18 1.573 1.573 0 00-.12-.15.999.999 0 00-1.09-.21 1 1 0 00-.33.21 1.573 1.573 0 00-.12.15.762.762 0 00-.09.18.64.64 0 00-.06.18 1.517 1.517 0 000 .2.84.84 0 00.08.38c.05.121.122.233.21.33A1 1 0 0012 18a.84.84 0 00.38-.08.9.9 0 00.54-.54A.84.84 0 0013 17a1.517 1.517 0 000-.2.639.639 0 00-.08-.18zM20 8.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.09a.88.88 0 00-.33-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1V5.41zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v9zm-6-8a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UFileExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileExclamation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileExclamation;
