import React from 'react';
import PropTypes from 'prop-types';

const UTrafficBarrier = props => {
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
      <path d="M21 5h-1V4a1 1 0 00-2 0v1H6V4a1 1 0 00-2 0v1H3a1 1 0 00-1 1v6a1 1 0 001 1h1v7a1 1 0 102 0v-7h12v7a1 1 0 002 0v-7h1a1 1 0 001-1V6a1 1 0 00-1-1zM4 9.52V7h2.52L4 9.52zM5.34 11l4-4h3.33l-4 4H5.34zm6.15 0l4-4h3.18l-4 4h-3.18zM20 11h-2.51L20 8.49V11z"></path>
    </svg>
  );
};

UTrafficBarrier.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTrafficBarrier.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTrafficBarrier;
