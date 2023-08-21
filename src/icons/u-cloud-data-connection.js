import React from 'react';
import PropTypes from 'prop-types';

const UCloudDataConnection = props => {
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
      <path d="M21 18.5h-6.18A3 3 0 0013 16.68V13.5h3.17a4.33 4.33 0 001.3-8.5A6 6 0 006.06 6.63 3.5 3.5 0 007 13.5h4v3.18a3 3 0 00-1.82 1.82H3a1 1 0 100 2h6.18a3 3 0 005.64 0H21a1 1 0 000-2zm-14-7a1.5 1.5 0 010-3 1 1 0 001-1 4 4 0 017.79-1.29 1 1 0 00.78.67 2.31 2.31 0 011.93 2.29 2.34 2.34 0 01-2.33 2.33H7zm5 9a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UCloudDataConnection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudDataConnection.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudDataConnection;
