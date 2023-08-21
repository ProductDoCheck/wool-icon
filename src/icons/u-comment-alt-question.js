import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltQuestion = props => {
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
      <path d="M6.29 10.3a1 1 0 001.09 1.63 1.19 1.19 0 00.33-.22 1 1 0 00.21-.32 1 1 0 00-1.63-1.09zM7 5a1 1 0 010 2 1 1 0 000 2 3 3 0 10-2.6-4.5 1 1 0 101.73 1A1 1 0 017 5zm12 1h-6a1 1 0 100 2h6a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-1a1 1 0 10-2 0v1a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 22a1.1 1.1 0 00.4-.08A1 1 0 0022 21V9a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UCommentAltQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltQuestion;
