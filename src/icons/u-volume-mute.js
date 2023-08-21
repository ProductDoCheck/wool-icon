import React from 'react';
import PropTypes from 'prop-types';

const UVolumeMute = props => {
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
      <path d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.909.909 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08v9.84zM19.91 12l1.8-1.79a1.005 1.005 0 00-1.42-1.42l-1.79 1.8-1.79-1.8a1.004 1.004 0 00-1.42 1.42l1.8 1.79-1.8 1.79a1.001 1.001 0 00.325 1.639 1 1 0 001.095-.219l1.79-1.8 1.79 1.8a.999.999 0 001.42 0 1 1 0 000-1.42L19.91 12z"></path>
    </svg>
  );
};

UVolumeMute.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVolumeMute.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVolumeMute;
