import React from 'react';
import PropTypes from 'prop-types';

const UCommentHeart = props => {
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
      <path d="M12 8.35a3.07 3.07 0 00-3.54.53 3 3 0 000 4.24L11.29 16a1.002 1.002 0 001.42 0l2.83-2.83a3 3 0 000-4.24A3.07 3.07 0 0012 8.35zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 111.41-1.42 1.002 1.002 0 001.42 0 1 1 0 111.41 1.42zM12 2A10 10 0 002 12a9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 000-20zm0 18H5.41l.93-.93a1 1 0 000-1.41A8 8 0 1112 20z"></path>
    </svg>
  );
};

UCommentHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentHeart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentHeart;