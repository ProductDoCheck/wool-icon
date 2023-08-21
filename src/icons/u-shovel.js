import React from 'react';
import PropTypes from 'prop-types';

const UShovel = props => {
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
      <path d="M21.71 7.38l-5.09-5.09a1 1 0 10-1.41 1.42L17 5.54 11.58 11l-1-1a3 3 0 00-4.25 0l-3.45 3.42A3 3 0 002 15.55V19a3 3 0 003 3h3.45a3.002 3.002 0 002.13-.88L14 17.69a3 3 0 000-4.25l-1-1L18.46 7l1.83 1.83a1 1 0 001.42 0 1 1 0 000-1.45zm-9.11 8.89l-3.44 3.44a1 1 0 01-.71.29H5a1 1 0 01-1-1v-3.45a1 1 0 01.29-.71l3.44-3.44a1 1 0 011.41 0l1 1-.89.9a1 1 0 00.345 1.634A1 1 0 0010 15a1 1 0 00.7-.29l.9-.89 1 1a1 1 0 010 1.45z"></path>
    </svg>
  );
};

UShovel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShovel.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShovel;
