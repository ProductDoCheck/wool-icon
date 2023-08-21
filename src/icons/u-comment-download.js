import React from 'react';
import PropTypes from 'prop-types';

const UCommentDownload = props => {
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
      <path d="M19 14a.998.998 0 00-1.22.72A7 7 0 0111 20H5.41l.64-.63a1 1 0 000-1.41A7 7 0 0111 6c.293-.015.587-.015.88 0a1.007 1.007 0 00.24-2A8.319 8.319 0 0011 4a9 9 0 00-7 14.62l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 003 22h8a9 9 0 008.72-6.75A1 1 0 0019 14zm2.71-6.74a.999.999 0 00-1.42 0L19 8.59V3a1 1 0 10-2 0v5.59l-1.29-1.3a1.004 1.004 0 10-1.42 1.42l3 3c.095.091.207.162.33.21a.94.94 0 00.76 0 1 1 0 00.33-.21l3-3a1 1 0 000-1.42v-.03z"></path>
    </svg>
  );
};

UCommentDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentDownload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentDownload;
