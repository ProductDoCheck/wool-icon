import React from 'react';
import PropTypes from 'prop-types';

const UHorizontalAlignLeft = props => {
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
      <path d="M21 10h-5V7a1 1 0 00-1-1H4V3a1 1 0 00-2 0v18a1 1 0 102 0v-3h17a1 1 0 001-1v-6a1 1 0 00-1-1zM4 8h10v2H4V8zm16 8H4v-4h16v4z"></path>
    </svg>
  );
};

UHorizontalAlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHorizontalAlignLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHorizontalAlignLeft;
