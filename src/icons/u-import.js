import React from 'react';
import PropTypes from 'prop-types';

const UImport = props => {
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
      <path d="M21 14a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 10-2 0v4a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm-9.71 1.71a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l4-4a1.004 1.004 0 10-1.42-1.42L13 12.59V3a1 1 0 00-2 0v9.59l-2.29-2.3a1.005 1.005 0 00-1.714.71 1.004 1.004 0 00.294.71l4 4z"></path>
    </svg>
  );
};

UImport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImport.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImport;
