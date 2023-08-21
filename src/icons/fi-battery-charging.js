import React from 'react';
import PropTypes from 'prop-types';

const FiBatteryCharging = props => {
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
      <path d="M23 13v-2"></path>
      <path d="M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3.19M15 6h2a2 2 0 012 2v8a2 2 0 01-2 2h-3.19"></path>
      <path d="M11 6l-4 6h6l-4 6"></path>
    </svg>
  );
};

FiBatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiBatteryCharging.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiBatteryCharging;
