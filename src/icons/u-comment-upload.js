import React from 'react';
import PropTypes from 'prop-types';

const UCommentUpload = props => {
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
      <path d="M19 14a1 1 0 00-1.22.72A7 7 0 0111 20H5.41l.64-.63a1 1 0 000-1.41A7 7 0 0111 6a1 1 0 100-2 9 9 0 00-7 14.62l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 003 22h8a9 9 0 008.72-6.75A1 1 0 0019 14zm2.71-8.74l-3-3a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-3 3a1.004 1.004 0 101.42 1.42L17 5.41V11a1 1 0 002 0V5.41l1.29 1.3a1 1 0 001.639-.325 1 1 0 00-.219-1.095v-.03z"></path>
    </svg>
  );
};

UCommentUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentUpload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentUpload;
