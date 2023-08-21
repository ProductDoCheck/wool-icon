import React from 'react';
import PropTypes from 'prop-types';

const UChatInfo = props => {
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
      <path d="M19.29 3.71a1 1 0 001.42 0 1.15 1.15 0 00.21-.33 1 1 0 00.006-.764 1 1 0 00-.216-.326l-.15-.12a.76.76 0 00-.18-.09 1 1 0 00-1.09.21A1 1 0 0019 3c.002.13.029.26.08.38.05.121.122.233.21.33zM20 5a1 1 0 00-1 1v4a1 1 0 002 0V6a1 1 0 00-1-1zm.06 8a1 1 0 00-1.11.87A7 7 0 0112 20H6.41l.64-.63a1 1 0 000-1.41 7 7 0 018.44-11.02 1 1 0 001-1.72A8.84 8.84 0 0012 4a9 9 0 00-7 14.62l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 004 22h8a9 9 0 008.93-7.88 1 1 0 00-.87-1.12z"></path>
    </svg>
  );
};

UChatInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UChatInfo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UChatInfo;
