import React from 'react';
import PropTypes from 'prop-types';

const UCommentExclamation = props => {
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
      <path d="M12 14a1 1 0 100 2 1 1 0 000-2zm0-12A10 10 0 002 12a9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 000-20zm0 18H5.41l.93-.93a1 1 0 00.3-.71 1 1 0 00-.3-.7A8 8 0 1112 20zm0-12a1 1 0 00-1 1v3a1 1 0 102 0V9a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UCommentExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentExclamation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentExclamation;
