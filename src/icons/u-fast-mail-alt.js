import React from 'react';
import PropTypes from 'prop-types';

const UFastMailAlt = props => {
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
      <path d="M15.69 9a2.93 2.93 0 00-1-1.71 3 3 0 00-2-.74H4.8a3 3 0 00-2.3 1.02v.06A3 3 0 001.84 10l.88 5a3 3 0 003 2.48h7.94a3 3 0 002.29-1.07 3 3 0 00.62-2.41l-.88-5zm-3.41-.5l-2.34 2.64a1 1 0 01-1.38.11L5.17 8.5h7.11zm2.1 6.64a1 1 0 01-.76.36H5.68a1 1 0 01-1-.83L3.87 10l3.43 2.8a3 3 0 004.14-.34L13.8 9.8l.8 4.53a1 1 0 01-.22.81zm6.83-4.64h-2a1 1 0 000 2h2a1 1 0 000-2zm0-2a1 1 0 100-2h-3a1 1 0 100 2h3z"></path>
    </svg>
  );
};

UFastMailAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFastMailAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFastMailAlt;
