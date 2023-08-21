import React from 'react';
import PropTypes from 'prop-types';

const UCloudDatabaseTree = props => {
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
      <path d="M22.5 14.5a2 2 0 00-2-2h-6a2 2 0 00-2 2h-3v-3h2.33A3.66 3.66 0 0013 4.37a5 5 0 00-9.43 1.28 3 3 0 00.93 5.85h3v8a1 1 0 001 1h4a2 2 0 002 2h6a2 2 0 002-2v-2a2.001 2.001 0 00-.28-1c.18-.303.276-.648.28-1v-2zm-18-5a1 1 0 110-2 1 1 0 001-1 3 3 0 015.84-1 1 1 0 00.78.66 1.65 1.65 0 011.38 1.67 1.67 1.67 0 01-1.67 1.67H4.5zm8 9h-3v-2h3a2 2 0 00.28 1 2 2 0 00-.28 1zm2 2v-2h6v2h-6zm0-4v-2h6v2h-6z"></path>
    </svg>
  );
};

UCloudDatabaseTree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudDatabaseTree.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudDatabaseTree;
