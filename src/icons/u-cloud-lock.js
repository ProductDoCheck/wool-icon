import React from 'react';
import PropTypes from 'prop-types';

const UCloudLock = props => {
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
      <path d="M18.42 6.72A7 7 0 005.06 8.61a4 4 0 00-.38 7.66c.104.032.212.049.32.05a1.013 1.013 0 10.32-2A2 2 0 014 12.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1.004 1.004 0 001 1.74A5 5 0 0022 11.5a5 5 0 00-3.58-4.78zm-3.42 9V14.5a3 3 0 00-6 0v1.18a3 3 0 001 5.82h4a3 3 0 001-5.82v.04zm-4-1.22a1 1 0 012 0v1h-2v-1zm3 5h-4a1 1 0 110-2h4a1 1 0 010 2z"></path>
    </svg>
  );
};

UCloudLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudLock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudLock;
