import React from 'react';
import PropTypes from 'prop-types';

const UCommentAdd = props => {
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
      <path d="M5 8a1 1 0 002 0V7h1a1 1 0 000-2H7V4a1 1 0 00-2 0v1H4a1 1 0 000 2h1v1zm13-3h-6a1 1 0 100 2h6a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H8a1 1 0 01-1-1v-3a1 1 0 10-2 0v3a3 3 0 003 3h8.36l3 2.73A1 1 0 0020 21a1.1 1.1 0 00.4-.08A1 1 0 0021 20V8a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UCommentAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAdd;
