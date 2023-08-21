import React from 'react';
import PropTypes from 'prop-types';

const UVolumeUp = props => {
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
      <path d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.909.909 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08v9.84zm4.14-12.83a1.01 1.01 0 00-.28 2 6 6 0 010 11.86 1.003 1.003 0 00.14 2h.14a8 8 0 000-15.82v-.04zm-.46 9.78a1.013 1.013 0 00.32 2c.108-.001.216-.018.32-.05a4 4 0 000-7.54 1.002 1.002 0 00-.64 1.9 2 2 0 010 3.74v-.05z"></path>
    </svg>
  );
};

UVolumeUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVolumeUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVolumeUp;
