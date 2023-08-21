import React from 'react';
import PropTypes from 'prop-types';

const UExclamationCircle = props => {
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
      <path d="M12 7a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1zm.92 8.62a.758.758 0 00-.09-.18l-.12-.15a.999.999 0 00-1.09-.21 1.15 1.15 0 00-.33.21A1 1 0 0011 16c.002.13.029.26.08.38a.9.9 0 00.54.54.94.94 0 00.76 0 .9.9 0 00.54-.54c.051-.12.078-.25.08-.38a1.362 1.362 0 000-.2.639.639 0 00-.08-.18zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UExclamationCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExclamationCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExclamationCircle;
