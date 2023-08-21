import React from 'react';
import PropTypes from 'prop-types';

const UChannelAdd = props => {
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
      <path d="M18 7h1v1a1 1 0 002 0V7h1a1 1 0 100-2h-1V4a1 1 0 00-2 0v1h-1a1 1 0 100 2zm2 9a3 3 0 00-1.73.56l-2.45-1.45A3.74 3.74 0 0016 14a4 4 0 00-3-3.86V7.82a3 3 0 10-2 0v2.32A4 4 0 008 14c.004.377.064.751.18 1.11l-2.45 1.45A3 3 0 004 16a3 3 0 103 3 3 3 0 00-.12-.8l2.3-1.37a4 4 0 005.64 0l2.3 1.37A3 3 0 1020 16zM4 20a1 1 0 110-2 1 1 0 010 2zm8-16a1 1 0 110 2 1 1 0 010-2zm0 12a2 2 0 110-4 2 2 0 010 4zm8 4a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UChannelAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UChannelAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UChannelAdd;
