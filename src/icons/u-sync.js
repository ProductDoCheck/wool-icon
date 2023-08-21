import React from 'react';
import PropTypes from 'prop-types';

const USync = props => {
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
      <path d="M19.91 15.51h-4.53a1 1 0 000 2h2.4A8 8 0 014 12a1 1 0 10-2 0 10 10 0 0016.88 7.23V21a1 1 0 002 0v-4.5a1 1 0 00-.97-.99zM12 2a10 10 0 00-6.88 2.77V3a1 1 0 00-2 0v4.5a1 1 0 001 1h4.5a1 1 0 000-2h-2.4A8 8 0 0120 12a1 1 0 002 0A10 10 0 0012 2z"></path>
    </svg>
  );
};

USync.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USync.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USync;
