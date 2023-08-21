import React from 'react';
import PropTypes from 'prop-types';

const UHorizontalAlignCenter = props => {
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
      <path d="M21 10h-2V7a1 1 0 00-1-1h-5V3a1 1 0 00-2 0v3H6a1 1 0 00-1 1v3H3a1 1 0 00-1 1v6a1 1 0 001 1h8v3a1 1 0 002 0v-3h8a1 1 0 001-1v-6a1 1 0 00-1-1zM7 8h10v2H7V8zm13 8H4v-4h16v4z"></path>
    </svg>
  );
};

UHorizontalAlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHorizontalAlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHorizontalAlignCenter;