import React from 'react';
import PropTypes from 'prop-types';

const UFileInfoAlt = props => {
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
      <path d="M15 16H9a1 1 0 000 2h6a1 1 0 000-2zm-6-6h1a1 1 0 100-2H9a1 1 0 000 2zm6 2H9a1 1 0 000 2h6a1 1 0 000-2zm4.71 3.29a1 1 0 00-.33-.21.92.92 0 00-.76 0 1 1 0 00-.33.21 1.15 1.15 0 00-.21.33 1 1 0 00.21 1.09A1 1 0 0019 17c.13-.002.26-.029.38-.08a1.15 1.15 0 00.33-.21.999.999 0 00.21-1.09 1.15 1.15 0 00-.21-.33zM20 8.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h8a1 1 0 000-2H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v2a1 1 0 002 0V9v-.06zM15 8a1 1 0 01-1-1V5.41L16.59 8H15zm4 10a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UFileInfoAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileInfoAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileInfoAlt;
