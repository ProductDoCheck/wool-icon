import React from 'react';
import PropTypes from 'prop-types';

const UCloudUnlock = props => {
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
      <path d="M14 15.5h-3v-1a1 1 0 011.88-.5 1 1 0 001.37.34 1 1 0 00.34-1.34 3.084 3.084 0 00-.46-.59A3 3 0 0012 11.5a3 3 0 00-3 3v1.18a3 3 0 001 5.82h4a3 3 0 000-6zm0 4h-4a1 1 0 110-2h4a1 1 0 010 2zm4.42-12.78A7 7 0 005.06 8.61a4 4 0 00-.38 7.66c.104.032.212.049.32.05a1.013 1.013 0 10.32-2A2 2 0 014 12.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1.004 1.004 0 001 1.74A5 5 0 0022 11.5a5 5 0 00-3.58-4.78z"></path>
    </svg>
  );
};

UCloudUnlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudUnlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudUnlock;
