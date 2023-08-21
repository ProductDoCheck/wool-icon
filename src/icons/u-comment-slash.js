import React from 'react';
import PropTypes from 'prop-types';

const UCommentSlash = props => {
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
      <path d="M10.19 5.23A7.12 7.12 0 0112 5a7 7 0 017 7c.001.61-.076 1.219-.23 1.81a1 1 0 00.7 1.23c.086.01.174.01.26 0a1 1 0 001-.74c.19-.752.28-1.525.27-2.3a9 9 0 00-9-9 8.91 8.91 0 00-2.33.3 1 1 0 00.52 1.93zm11.52 15.06l-18-18a1.004 1.004 0 00-1.42 1.42L5 6.38a9 9 0 000 11.24l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 004 21h8a9 9 0 005.62-2l2.67 2.68a.998.998 0 001.42 0 1 1 0 000-1.39zM12 19H6.41l.64-.63a1 1 0 000-1.41 7 7 0 01-.65-9.15l9.79 9.79A7 7 0 0112 19z"></path>
    </svg>
  );
};

UCommentSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentSlash;
