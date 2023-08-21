import React from 'react';
import PropTypes from 'prop-types';

const UVuejsAlt = props => {
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
      <path d="M22.867 3.374a1 1 0 00-.866-.502l-4.97-.004h-3.652a1.002 1.002 0 00-.817.425l-.56.796-.564-.798a.998.998 0 00-.815-.423H6.968l-4.973.027A1 1 0 001.137 4.4l10.02 17.106a1 1 0 00.863.494 1 1 0 00.864-.496l9.98-17.128a1.002 1.002 0 00.003-1.002zM10.104 4.868l1.086 1.533a.999.999 0 00.816.423h.001a1.002 1.002 0 00.817-.425L13.9 4.87l1.363-.002-3.244 5.454-3.275-5.454 1.361.001zm1.913 14.15L3.74 4.885l2.67-.015 4.754 7.918a1 1 0 00.857.486h.006a1 1 0 00.857-.49l4.708-7.916 2.67.003-8.244 14.147z"></path>
    </svg>
  );
};

UVuejsAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVuejsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVuejsAlt;
