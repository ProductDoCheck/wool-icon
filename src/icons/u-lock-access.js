import React from 'react';
import PropTypes from 'prop-types';

const ULockAccess = props => {
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
      <path d="M21 2h-6a1 1 0 100 2h5v5a1 1 0 002 0V3a1 1 0 00-1-1zm0 12a1 1 0 00-1 1v5h-5a1 1 0 000 2h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-9-8a3 3 0 00-3 3v1a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2V9a3 3 0 00-3-3zm-1 3a1 1 0 012 0v1h-2V9zm4 7H9v-4h6v4zM3 10a1 1 0 001-1V4h5a1 1 0 000-2H3a1 1 0 00-1 1v6a1 1 0 001 1zm6 10H4v-5a1 1 0 10-2 0v6a1 1 0 001 1h6a1 1 0 000-2z"></path>
    </svg>
  );
};

ULockAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULockAccess.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULockAccess;
