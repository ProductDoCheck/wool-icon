import React from 'react';
import PropTypes from 'prop-types';

const UDribbble = props => {
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
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a7.94 7.94 0 015.51 2.22 24.93 24.93 0 01-4.83 2.18 29.067 29.067 0 00-2.87-4.09A7.94 7.94 0 0112 4zM7.89 5.15A27.16 27.16 0 0110.7 9a25.11 25.11 0 01-6 .74h-.36a8 8 0 013.55-4.59zM6 17.31A7.9 7.9 0 014 12v-.29h.68a26.673 26.673 0 007-1c.32.61.62 1.24.91 1.89a14.3 14.3 0 00-4.29 2.41l-.3.24a20.995 20.995 0 00-2 2.06zM12 20a7.92 7.92 0 01-4.47-1.37 17.92 17.92 0 011.56-1.58l.32-.27a12.631 12.631 0 014-2.27 32.01 32.01 0 011.4 5A8.08 8.08 0 0112 20zm4.63-1.49a34.88 34.88 0 00-1.28-4.46h.34c.04-.01.08-.01.12 0h.69a9.43 9.43 0 013.09.53 7.94 7.94 0 01-2.96 3.93zM16.5 12h-.62a1.561 1.561 0 00-.39 0c-.272.017-.542.05-.81.1h-.1c-.29-.67-.59-1.32-.92-2a26.57 26.57 0 005.13-2.4A8 8 0 0120 12v.51a11.48 11.48 0 00-3.5-.51z"></path>
    </svg>
  );
};

UDribbble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDribbble.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDribbble;
