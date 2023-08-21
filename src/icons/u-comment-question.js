import React from 'react';
import PropTypes from 'prop-types';

const UCommentQuestion = props => {
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
      <path d="M14.77 5.87a1 1 0 001.36-.37A1 1 0 0118 6a1 1 0 01-1 1 1 1 0 100 2 3 3 0 10-2.6-4.5 1 1 0 00.37 1.37zm4.3 7.13a1 1 0 00-1.12.86A7 7 0 0111 20H5.41l.65-.65a1 1 0 000-1.41A7 7 0 0111 6a1 1 0 100-2 9 9 0 00-7 14.61l-1.71 1.68a1 1 0 00-.21 1.09A1 1 0 003 22h8a9 9 0 008.93-7.87 1 1 0 00-.86-1.13zm-1.69-2.93a1 1 0 00-.58-.07l-.18.06-.18.09-.15.13c-.09.092-.161.2-.21.32a.84.84 0 00-.08.4 1 1 0 00.07.39 1 1 0 00.22.32A1.001 1.001 0 0017 12a1 1 0 001-1 .84.84 0 00-.08-.38 1.07 1.07 0 00-.54-.54v-.01z"></path>
    </svg>
  );
};

UCommentQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentQuestion;