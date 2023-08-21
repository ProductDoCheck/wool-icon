import React from 'react';
import PropTypes from 'prop-types';

const UYoutube = props => {
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
      <path d="M23 9.71a8.499 8.499 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.362 78.362 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2c.12.505.365.972.71 1.36a2.86 2.86 0 001.49.78c2.156.266 4.328.376 6.5.33 3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78c.28-.28.49-.623.61-1 .358-1.097.533-2.246.52-3.4.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"></path>
    </svg>
  );
};

UYoutube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UYoutube.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UYoutube;