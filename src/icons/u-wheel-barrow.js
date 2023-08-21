import React from 'react';
import PropTypes from 'prop-types';

const UWheelBarrow = props => {
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
      <path d="M21 2h-2.3l-.16.07-.17.11a.8.8 0 00-.23.29.71.71 0 00-.08.18v.09L17.38 6h-1.14l-3.12-3.11a3.06 3.06 0 00-4.24 0L5.76 6H3a1 1 0 00-.87 1.5l4 7-.77 1.5c-.12-.01-.24-.01-.36 0a3 3 0 103 3 3 3 0 00-.85-2.08l1-2 1.38-.14 3.94 5.91A2.929 2.929 0 0016 22c.386 0 .77-.072 1.13-.21a3 3 0 001.87-3.3L18 13l1.79-9H21a1 1 0 100-2zM5 20a1 1 0 110-2 1 1 0 010 2zm5.3-15.71a1 1 0 011.4 0L13.41 6H8.59l1.71-1.71zm-2.75 8.65L4.72 8H17l-.82 4.08-8.63.86zm8.81 7a1 1 0 01-1.2-.38l-3.34-5 4.37-.43.81 4.69a1 1 0 01-.64 1.11v.01z"></path>
    </svg>
  );
};

UWheelBarrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWheelBarrow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWheelBarrow;
