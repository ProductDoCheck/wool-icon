import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltEdit = props => {
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
      <path d="M18.5 5.5h-4a1 1 0 100 2h4a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H8.5a1 1 0 01-1-1v-1a1 1 0 10-2 0v1a3 3 0 003 3h8.36l3 2.73a1 1 0 001.518-.18 1 1 0 00.162-.55v-12a3 3 0 00-3.04-3zm-9.42 7h2.42a1 1 0 001-1V9.08a1 1 0 00-.29-.71L6.63 2.79a1 1 0 00-1.41 0L2.79 5.22a1 1 0 000 1.41l5.58 5.58a1 1 0 00.71.29zM5.92 4.91l4.58 4.58v1h-1L4.91 5.92l1.01-1.01z"></path>
    </svg>
  );
};

UCommentAltEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltEdit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltEdit;
