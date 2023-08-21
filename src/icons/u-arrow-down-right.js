import React from 'react';
import PropTypes from 'prop-types';

const UArrowDownRight = props => {
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
      <path d="M17 6a1 1 0 00-1 1v7.59l-8.29-8.3a1.004 1.004 0 00-1.42 1.42l8.3 8.29H7a1 1 0 000 2h10c.13-.002.26-.029.38-.08a1 1 0 00.54-.54c.051-.12.078-.25.08-.38V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowDownRight;
