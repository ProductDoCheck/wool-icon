import React from 'react';
import PropTypes from 'prop-types';

const UStoreAlt = props => {
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
      <path d="M22 2H2a1 1 0 00-1 1v4a3 3 0 002 2.82V21a1 1 0 001 1h16a1 1 0 001-1V9.82A3 3 0 0023 7V3a1 1 0 00-1-1zm-7 2h2v3a1 1 0 01-2 0V4zm-4 0h2v3a1 1 0 01-2 0V4zM7 4h2v3a1 1 0 01-2 0V4zM4 8a1 1 0 01-1-1V4h2v3a1 1 0 01-1 1zm10 12h-4v-4a2 2 0 014 0v4zm5 0h-3v-4a4 4 0 10-8 0v4H5V9.82a3.17 3.17 0 001-.6 3 3 0 004 0 3 3 0 004 0 3 3 0 004 0c.293.26.632.464 1 .6V20zm2-13a1 1 0 01-2 0V4h2v3z"></path>
    </svg>
  );
};

UStoreAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStoreAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStoreAlt;
