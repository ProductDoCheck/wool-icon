import React from 'react';
import PropTypes from 'prop-types';

const UFileCopyAlt = props => {
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
      <path d="M16 20H8a3 3 0 01-3-3V7a1 1 0 00-2 0v10a5 5 0 005 5h8a1 1 0 000-2zm-6-7a1 1 0 001 1h5a1 1 0 000-2h-5a1 1 0 00-1 1zm11-4.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H10a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3V9v-.06zm-6-3.53L17.59 8H16a1 1 0 01-1-1V5.41zM19 15a1 1 0 01-1 1h-8a1 1 0 01-1-1V5a1 1 0 011-1h3v3a3 3 0 00.18 1H11a1 1 0 100 2h8v5z"></path>
    </svg>
  );
};

UFileCopyAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileCopyAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileCopyAlt;