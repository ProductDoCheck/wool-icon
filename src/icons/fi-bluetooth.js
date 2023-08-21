import React from 'react';
import PropTypes from 'prop-types';

const FiBluetooth = props => {
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
      <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"></path>
    </svg>
  );
};

FiBluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiBluetooth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiBluetooth;
