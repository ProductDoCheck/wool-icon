import React from 'react';
import PropTypes from 'prop-types';

const UVolumeOff = props => {
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
      <path d="M16.93 4.1a1 1 0 00-1 .12L11.15 8H7.5a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78a1 1 0 00.62.22.909.909 0 00.43-.1 1 1 0 00.57-.9V5a1 1 0 00-.57-.9zM15.5 16.92l-3.38-2.7a1 1 0 00-.62-.22h-3v-4h3a1 1 0 00.62-.22l3.38-2.7v9.84z"></path>
    </svg>
  );
};

UVolumeOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVolumeOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVolumeOff;
