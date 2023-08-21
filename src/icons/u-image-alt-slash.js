import React from 'react';
import PropTypes from 'prop-types';

const UImageAltSlash = props => {
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
      <path d="M21.71 20.29l-.93-.93-.09-.1-.06-.07-.5-.5-.13-.07-5.18-5.2-.09-.08-3.2-3.21-.1-.13-7.72-7.71a1.004 1.004 0 10-1.42 1.42l1 1A3 3 0 003 6v12a3 3 0 003 3h12a2.9 2.9 0 001.27-.31h.05l.95 1a1.002 1.002 0 001.42 0 1 1 0 00.02-1.4zM5 6.41l3.24 3.24a2.84 2.84 0 00-.67.48L5 12.71v-6.3zM6 19a1 1 0 01-1-1v-2.46l4-4a.81.81 0 011.1 0L17.59 19H6zM9.66 5H18a1 1 0 011 1v5.94a1.005 1.005 0 00-1.42 1.42l1.74 1.74a1.002 1.002 0 001.638-.33 1 1 0 00.072-.39V6a3 3 0 00-3-3H9.66a1 1 0 000 2z"></path>
    </svg>
  );
};

UImageAltSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageAltSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageAltSlash;
