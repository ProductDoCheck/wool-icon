import React from 'react';
import PropTypes from 'prop-types';

const UFileLockAlt = props => {
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
      <path d="M10 20H5a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h4a1 1 0 00.92-.62 1 1 0 00-.21-1.09l-6-6a1.071 1.071 0 00-.28-.19.32.32 0 00-.09 0l-.28-.1H5a3 3 0 00-3 3v14a3 3 0 003 3h5a1 1 0 000-2zm2-14.59L14.59 8H13a1 1 0 01-1-1V5.41zM13 13a1 1 0 00-1-1H7a1 1 0 000 2h5a1 1 0 001-1zm-6-3h1a1 1 0 000-2H7a1 1 0 000 2zm0 6a1 1 0 000 2h2a1 1 0 000-2H7zm13-.82V15a3 3 0 00-6 0v.18A3 3 0 0012 18v1a3 3 0 003 3h4a3 3 0 003-3v-1a3 3 0 00-2-2.82zM17 14a1 1 0 011 1h-2a1 1 0 011-1zm3 5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1a1 1 0 011-1h4a1 1 0 011 1v1z"></path>
    </svg>
  );
};

UFileLockAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileLockAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileLockAlt;
