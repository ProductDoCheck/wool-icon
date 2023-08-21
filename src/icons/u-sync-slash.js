import React from 'react';
import PropTypes from 'prop-types';

const USyncSlash = props => {
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
      <path d="M19.88 15.5h-4.5a1 1 0 000 2h2.4A8 8 0 0112 20a8.079 8.079 0 01-3.12-.63l-1.49 1.49A9.829 9.829 0 0012 22a10 10 0 006.88-2.77V21a1 1 0 102 0v-4.5a1 1 0 00-1-1zm-1.57-8.4l1.43-1.43 2-2a1.003 1.003 0 00-1.42-1.42l-2 2A9.89 9.89 0 0012 2a10 10 0 00-6.88 2.77V3a1 1 0 00-2 0v4.5a1 1 0 001 1h4.5a1 1 0 100-2h-2.4a7.93 7.93 0 0110.67-.81l-11.2 11.2A7.93 7.93 0 014 12a1 1 0 00-2 0 9.89 9.89 0 002.27 6.32l-2 2a1 1 0 00.325 1.639 1 1 0 001.095-.219l2-2 1.43-1.43L18.31 7.1zm1.06 1.78A8.08 8.08 0 0120 12a1 1 0 102 0 9.83 9.83 0 00-1.14-4.61l-1.49 1.49z"></path>
    </svg>
  );
};

USyncSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USyncSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USyncSlash;
