import React from 'react';
import PropTypes from 'prop-types';

const UDesktopAltSlash = props => {
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
      <path d="M21.71 20.29l-18-18a1.004 1.004 0 00-1.42 1.42l1 1A3 3 0 003 6v8a3 3 0 003 3h3v2H6a1 1 0 000 2h12a1 1 0 00.93-.66l1.36 1.37a.998.998 0 001.42 0 .997.997 0 00.219-1.095.998.998 0 00-.22-.325zM5 6.41L9.59 11H5V6.41zM13 19h-2v-2h2v2zm-7-4a1 1 0 01-1-1v-1h6.59l2 2H6zm9 4v-2h.59l2 2H15zM9.66 5H18a1 1 0 011 1v5h-1.34a1 1 0 000 2H19v1a.369.369 0 010 .11 1.001 1.001 0 00.78 1.18h.2a1 1 0 001-.8c.02-.162.027-.326.02-.49V6a3 3 0 00-3-3H9.66a1 1 0 000 2z"></path>
    </svg>
  );
};

UDesktopAltSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDesktopAltSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDesktopAltSlash;
