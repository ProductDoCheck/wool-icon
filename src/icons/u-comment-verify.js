import React from 'react';
import PropTypes from 'prop-types';

const UCommentVerify = props => {
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
      <path d="M15.29 8.85l-4.73 4.74-1.85-1.86a1.004 1.004 0 00-1.42 1.42l2.56 2.56a1.002 1.002 0 001.42 0l5.44-5.44a1.003 1.003 0 10-1.42-1.42zM12 2A10 10 0 002 12a9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 000-20zm0 18H5.41l.93-.93a1 1 0 000-1.41A8 8 0 1112 20z"></path>
    </svg>
  );
};

UCommentVerify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentVerify.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentVerify;
