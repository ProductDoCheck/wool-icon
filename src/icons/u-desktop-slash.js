import React from 'react';
import PropTypes from 'prop-types';

const UDesktopSlash = props => {
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
      <path d="M10.66 6H18a1 1 0 011 1v6a.94.94 0 01-.14.5 1 1 0 00.31 1.38.94.94 0 00.53.16.998.998 0 00.84-.46c.3-.472.46-1.02.46-1.58V7a3 3 0 00-3-3h-7.34a1 1 0 100 2zm11.05 14.29L5.86 4.45 3.71 2.29a1.004 1.004 0 10-1.42 1.42l1.4 1.39A3 3 0 003 7v6a3 3 0 003 3h5v2H7a1 1 0 000 2h10a1 1 0 00.93-.66l2.36 2.37a.999.999 0 001.42 0 1 1 0 000-1.42zM6 14a1 1 0 01-1-1V7a1 1 0 01.12-.46L12.59 14H6zm7 4v-2h1.59l2 2H13z"></path>
    </svg>
  );
};

UDesktopSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDesktopSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDesktopSlash;
