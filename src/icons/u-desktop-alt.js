import React from 'react';
import PropTypes from 'prop-types';

const UDesktopAlt = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h3v2H5a1 1 0 000 2h14a1 1 0 000-2h-3v-2h3a3 3 0 003-3V5a3 3 0 00-3-3zm-5 18h-4v-2h4v2zm6-5a1 1 0 01-1 1H5a1 1 0 01-1-1v-1h16v1zm0-3H4V5a1 1 0 011-1h14a1 1 0 011 1v7z"></path>
    </svg>
  );
};

UDesktopAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDesktopAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDesktopAlt;
