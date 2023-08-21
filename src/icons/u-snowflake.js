import React from 'react';
import PropTypes from 'prop-types';

const USnowflake = props => {
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
      <path d="M21.16 16.13l-2-1.15.89-.24a1.001 1.001 0 00-.123-1.969 1 1 0 00-.397.039l-2.82.76L14 12l2.71-1.57 2.82.76h.26a1.008 1.008 0 10.26-2L19.16 9l2-1.15a1.005 1.005 0 00.112-1.665 1.004 1.004 0 00-1.112-.075L18 7.37l.3-1.11a1 1 0 10-1.93-.52l-.82 3L13 10.27V7.14l2.07-2.07a1 1 0 10-1.42-1.41l-.65.65V2a1 1 0 00-2 0v2.47l-.81-.81a1 1 0 10-1.42 1.41L11 7.3v3L8.43 8.78l-.82-3a1 1 0 10-1.93.52L6 7.37 3.84 6.13a1.003 1.003 0 10-1 1.74l2 1.13-.84.26a1.008 1.008 0 00.26 2h.26l2.82-.76L10 12l-2.71 1.57-2.82-.76A1 1 0 104 14.74l.89.24-2 1.15a1.003 1.003 0 101 1.74L6 16.63l-.3 1.11A1 1 0 006.39 19c.086.01.174.01.26 0a1 1 0 001-.74l.82-3L11 13.73v3.13l-2.07 2.07a1 1 0 000 1.41 1 1 0 00.71.3 1 1 0 00.71-.3l.65-.65V22a1 1 0 102 0v-2.47l.81.81a1.002 1.002 0 001.71-.705 1 1 0 00-.29-.705L13 16.7v-3l2.57 1.49.82 3a1 1 0 001 .74c.086.01.174.01.26 0a.998.998 0 00.71-1.23L18 16.63l2.14 1.24a1.002 1.002 0 001.495-.741 1.001 1.001 0 00-.495-.999h.02z"></path>
    </svg>
  );
};

USnowflake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USnowflake.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USnowflake;