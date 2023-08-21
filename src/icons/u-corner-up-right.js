import React from 'react';
import PropTypes from 'prop-types';

const UCornerUpRight = props => {
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
      <path d="M19.61 7.25a1 1 0 00-.22-.33l-4.63-4.63a1 1 0 10-1.41 1.42l2.92 2.92h-8a4 4 0 00-4 4V21a1 1 0 002 0V10.63a2 2 0 012-2h8l-2.92 2.92a1 1 0 00.71 1.71 1 1 0 00.7-.3l4.63-4.62c.092-.1.167-.215.22-.34a1 1 0 000-.75z"></path>
    </svg>
  );
};

UCornerUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerUpRight;
