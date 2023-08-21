import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltDownload = props => {
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
      <path d="M6.12 11.92a.94.94 0 00.76 0 1 1 0 00.33-.21l3-3a1.004 1.004 0 00-1.42-1.42L7.5 8.59V3a1 1 0 00-2 0v5.59l-1.29-1.3a1.004 1.004 0 10-1.42 1.42l3 3a1 1 0 00.33.21zM18.5 6h-5a1 1 0 000 2h5a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H8.5a1 1 0 01-1-1v-1a1 1 0 10-2 0v1a3 3 0 003 3h8.36l3 2.73a1 1 0 001.518-.18 1 1 0 00.162-.55V9a2.998 2.998 0 00-3.04-3z"></path>
    </svg>
  );
};

UCommentAltDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltDownload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltDownload;
