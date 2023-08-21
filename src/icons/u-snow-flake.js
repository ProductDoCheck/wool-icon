import React from 'react';
import PropTypes from 'prop-types';

const USnowFlake = props => {
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
      <path d="M21 11h-1.59l1.3-1.29A1.005 1.005 0 0020 7.996a1.004 1.004 0 00-.71.294L16.59 11h-2.18l2.3-2.29A1.005 1.005 0 0016 6.996a1.004 1.004 0 00-.71.294L13 9.59V7.41l2.71-2.7A1.005 1.005 0 0015 2.996c-.266 0-.522.106-.71.294L13 4.59V3a1 1 0 00-2 0v1.59l-1.29-1.3a1.004 1.004 0 00-1.42 1.42L11 7.41v2.18l-2.29-2.3a1.004 1.004 0 10-1.42 1.42L9.59 11H7.41l-2.7-2.71a1.004 1.004 0 00-1.42 1.42L4.59 11H3a1 1 0 000 2h1.59l-1.3 1.29a1 1 0 00.325 1.639 1 1 0 001.095-.219L7.41 13h2.18l-2.3 2.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l2.29-2.3v2.18l-2.71 2.7a1.004 1.004 0 001.42 1.42l1.29-1.3V21a1 1 0 002 0v-1.59l1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L13 16.59v-2.18l2.29 2.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L14.41 13h2.18l2.7 2.71a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L19.41 13H21a1 1 0 000-2z"></path>
    </svg>
  );
};

USnowFlake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USnowFlake.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USnowFlake;