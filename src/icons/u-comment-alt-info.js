import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltInfo = props => {
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
      <path d="M5 11a1 1 0 001-1V6a1 1 0 00-2 0v4a1 1 0 001 1zm-.71-7.29a1 1 0 001.09.21 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33 1 1 0 00-.21-1.09 1 1 0 00-1.09-.21 1 1 0 00-.33.21 1 1 0 00-.21 1.09c.05.121.122.233.21.33zM17 6H9a1 1 0 100 2h8a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H7a1 1 0 01-1-1v-2a1 1 0 10-2 0v2a3 3 0 003 3h8.36l3 2.73A1 1 0 0019 22a1.1 1.1 0 00.4-.08A1 1 0 0020 21V9a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UCommentAltInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltInfo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltInfo;
