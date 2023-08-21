import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltSlash = props => {
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
      <path d="M10.66 6H17a1 1 0 011 1v6.34a1 1 0 002 0V7a3 3 0 00-3-3h-6.34a1 1 0 100 2zm11.05 14.29l-18-18a1.004 1.004 0 00-1.42 1.42l2 2A3 3 0 004 7v12a1 1 0 00.62.92 1 1 0 001.09-.21L8.41 17h7.18l4.7 4.71a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095zM8 15a1 1 0 00-.71.29L6 16.59V7.41L13.59 15H8z"></path>
    </svg>
  );
};

UCommentAltSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltSlash;
