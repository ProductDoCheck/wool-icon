import React from 'react';
import PropTypes from 'prop-types';

const UDocumentInfo = props => {
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
      <path d="M12 14a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm.38-2.92a1 1 0 00-.58-.08l-.18.06-.18.09-.15.12A1.002 1.002 0 0011 12a1 1 0 00.29.71 1 1 0 00.33.21.84.84 0 00.38.08 1 1 0 00.71-.29A1 1 0 0013 12a1 1 0 00-.29-.71 1.15 1.15 0 00-.33-.21zM20 8.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.1a1.099 1.099 0 00-.31-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1V5.41zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v9z"></path>
    </svg>
  );
};

UDocumentInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDocumentInfo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDocumentInfo;
