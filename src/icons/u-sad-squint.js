import React from 'react';
import PropTypes from 'prop-types';

const USadSquint = props => {
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
      <path d="M9.08 12.21l1.5-1.5a1.002 1.002 0 000-1.42l-1.5-1.5a1.004 1.004 0 10-1.42 1.42l.8.79-.8.79a1.001 1.001 0 001.094 1.636 1 1 0 00.326-.216zm-.72 3.12a1 1 0 00.173 1.646.998.998 0 001.107-.116 3.76 3.76 0 014.72 0 1.001 1.001 0 001.41-.13 1 1 0 00-.13-1.4 5.81 5.81 0 00-7.28 0zm8.22-7.54a1 1 0 00-1.42 0l-1.5 1.5a1 1 0 000 1.42l1.5 1.5a1 1 0 00.71.29 1 1 0 00.71-1.71l-.79-.79.79-.79a1 1 0 000-1.42zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

USadSquint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USadSquint.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USadSquint;
