import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltUpload = props => {
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
      <path d="M5.5 11a1 1 0 102 0V5.41l1.29 1.3a1 1 0 001.42 0 .998.998 0 000-1.42l-3-3a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-3 3a1.004 1.004 0 001.42 1.42l1.29-1.3V11zm13-5h-5a1 1 0 000 2h5a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H8.5a1 1 0 01-1-1v-1a1 1 0 10-2 0v1a3 3 0 003 3h8.36l3 2.73a1 1 0 001.518-.18 1 1 0 00.162-.55V9a2.998 2.998 0 00-3.04-3z"></path>
    </svg>
  );
};

UCommentAltUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltUpload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltUpload;
