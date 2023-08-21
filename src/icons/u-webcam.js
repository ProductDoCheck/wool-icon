import React from 'react';
import PropTypes from 'prop-types';

const UWebcam = props => {
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
      <path d="M12 13a3 3 0 100-6 3 3 0 000 6zm0-4a1 1 0 110 2 1 1 0 010-2zm9.59 9.16A10 10 0 0019 13.89a8 8 0 10-14 0 9.9 9.9 0 00-2.6 4.27A3 3 0 005.3 22h13.4a3 3 0 002.964-2.47 2.999 2.999 0 00-.074-1.37zM12 4a6 6 0 110 12 6 6 0 010-12zm7.52 15.59a1 1 0 01-.82.41H5.3a1 1 0 01-.996-.828 1 1 0 01.026-.452 7.85 7.85 0 011.88-3.22 8.001 8.001 0 0011.58 0 7.85 7.85 0 011.88 3.22 1 1 0 01-.15.87z"></path>
    </svg>
  );
};

UWebcam.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWebcam.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWebcam;
