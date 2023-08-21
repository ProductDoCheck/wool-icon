import React from 'react';
import PropTypes from 'prop-types';

const URestaurant = props => {
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
      <path d="M16.84 11.63a3.002 3.002 0 002.16-.88l2.83-2.83a1 1 0 10-1.42-1.41l-2.86 2.82a1 1 0 01-1.42 0l3.54-3.53a1.004 1.004 0 00-1.42-1.42l-3.53 3.54a1 1 0 010-1.41l2.83-2.83a1.004 1.004 0 00-1.42-1.42L13.3 5.09a3 3 0 000 4.24L12 10.62l-8.27-8.3-.1-.06a.71.71 0 00-.17-.11l-.18-.07L3.16 2h-.27a.57.57 0 00-.18 0 .7.7 0 00-.17.09l-.16.1h-.07l-.06.1a1 1 0 00-.11.17 1.07 1.07 0 00-.07.19v.11a11 11 0 003.11 9.34l2.64 2.63-5.41 5.4a.999.999 0 00.71 1.71 1 1 0 00.71-.29l6.07-5.98 2.83-2.83 2-2a3 3 0 002.11.89zm-7.65 1.82l-2.63-2.64A9.06 9.06 0 014 5.4l6.61 6.6-1.42 1.45zm6.24.57A1.008 1.008 0 1014 15.44l6.3 6.3a1 1 0 00.7.26 1 1 0 00.71-1.71l-6.28-6.27z"></path>
    </svg>
  );
};

URestaurant.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URestaurant.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URestaurant;
