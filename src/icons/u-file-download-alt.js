import React from 'react';
import PropTypes from 'prop-types';

const UFileDownloadAlt = props => {
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
      <path d="M8 8a1 1 0 000 2h1a1 1 0 000-2H8zm5 12H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v2a1 1 0 002 0V9v-.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.29.29 0 00-.1 0 1.099 1.099 0 00-.31-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h7a1 1 0 000-2zm0-14.59L15.59 8H14a1 1 0 01-1-1V5.41zM14 12H8a1 1 0 000 2h6a1 1 0 000-2zm6.71 6.29a1.002 1.002 0 00-1.42 0l-.29.3V16a1 1 0 00-2 0v2.59l-.29-.3a1.004 1.004 0 10-1.42 1.42l2 2a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2-2a1.002 1.002 0 000-1.42zM12 18a1 1 0 000-2H8a1 1 0 000 2h4z"></path>
    </svg>
  );
};

UFileDownloadAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileDownloadAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileDownloadAlt;
