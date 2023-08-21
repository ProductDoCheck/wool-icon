import React from 'react';
import PropTypes from 'prop-types';

const FiPhoneForwarded = props => {
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
      <path d="M19 1l4 4-4 4"></path>
      <path d="M15 5h8"></path>
      <path d="M22 16.92v3a1.998 1.998 0 01-2.18 2 19.791 19.791 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
    </svg>
  );
};

FiPhoneForwarded.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiPhoneForwarded.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiPhoneForwarded;
