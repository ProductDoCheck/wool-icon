import React from 'react';
import PropTypes from 'prop-types';

const UVolumeDown = props => {
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
      <path d="M18.83 9.17a1.003 1.003 0 10-1.42 1.42A2 2 0 0118 12a2 2 0 01-.71 1.53 1 1 0 00.175 1.654 1 1 0 001.105-.124A4 4 0 0020 12a4.06 4.06 0 00-1.17-2.83zm-4.4-5.07a1 1 0 00-1 .12L8.65 8H5a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0014 20a.909.909 0 00.43-.1A1 1 0 0015 19V5a1 1 0 00-.57-.9zM13 16.92l-3.38-2.7A1 1 0 009 14H6v-4h3a1 1 0 00.62-.22L13 7.08v9.84z"></path>
    </svg>
  );
};

UVolumeDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVolumeDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVolumeDown;
