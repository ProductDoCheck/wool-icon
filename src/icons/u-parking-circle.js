import React from 'react';
import PropTypes from 'prop-types';

const UParkingCircle = props => {
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
      <path d="M13 7h-3a1 1 0 00-1 1v8a1 1 0 102 0v-2h2a3 3 0 003-3v-1a3 3 0 00-3-3zm1 4a1 1 0 01-1 1h-2V9h2a1 1 0 011 1v1zm-2-9a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UParkingCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UParkingCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UParkingCircle;
