import React from 'react';
import PropTypes from 'prop-types';

const UDatabaseAlt = props => {
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
      <path d="M8 17a1 1 0 100 2 1 1 0 000-2zm0-6a1 1 0 100 2 1 1 0 000-2zm8-9H8a4 4 0 00-4 4v12a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4zm2 16a2 2 0 01-2 2H8a2 2 0 01-2-2v-2.56A3.91 3.91 0 008 16h8a3.91 3.91 0 002-.56V18zm0-6a2 2 0 01-2 2H8a2 2 0 01-2-2V9.44A3.91 3.91 0 008 10h8a3.91 3.91 0 002-.56V12zm-2-4H8a2 2 0 110-4h8a2 2 0 010 4z"></path>
    </svg>
  );
};

UDatabaseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDatabaseAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDatabaseAlt;
