import React from 'react';
import PropTypes from 'prop-types';

const FiWifi = props => {
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
      <path d="M12 20h.01"></path>
      <path d="M8.53 16.11a6 6 0 016.95 0"></path>
      <path d="M5 12.55a11 11 0 0114.08 0"></path>
      <path d="M1.42 9a16 16 0 0121.16 0"></path>
    </svg>
  );
};

FiWifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiWifi.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiWifi;
