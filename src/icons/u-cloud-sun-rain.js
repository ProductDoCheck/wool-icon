import React from 'react';
import PropTypes from 'prop-types';

const UCloudSunRain = props => {
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
      <path d="M7.5 15a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zM22 7h-1.1a5.22 5.22 0 00-.73-1.76l.83-.77a1.005 1.005 0 00-.71-1.714 1.004 1.004 0 00-.71.294l-.77.78A5 5 0 0017 3.1V2a1 1 0 00-2 0v1.1a5.22 5.22 0 00-1.76.73l-.77-.78a1.004 1.004 0 10-1.42 1.42l.78.77a5.06 5.06 0 00-.77 2A5.76 5.76 0 009.5 7a6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58c.127.05.263.078.4.08a1 1 0 00.4-1.92A1.48 1.48 0 013 15.5 1.5 1.5 0 014.5 14a1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.32 2.32 0 01.94 4.23 1.005 1.005 0 001.1 1.68 4.34 4.34 0 001.9-3.62 4.41 4.41 0 00-.45-1.92c.427-.14.834-.335 1.21-.58l.77.78A1 1 0 0021 13a1.002 1.002 0 000-1.42l-.78-.77A4.999 4.999 0 0020.9 9H22a1 1 0 100-2zm-3.87 3.12A3 3 0 0116 11h-.06a4.12 4.12 0 00-1-.46 5.93 5.93 0 00-2-2.38V8a3 3 0 01.87-2.12 3.1 3.1 0 014.25 0 3 3 0 010 4.25l.07-.01zM7.5 20a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zm4-1a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0-5a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UCloudSunRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudSunRain.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudSunRain;
