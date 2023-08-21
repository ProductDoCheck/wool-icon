import React from 'react';
import PropTypes from 'prop-types';

const USpade = props => {
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
      <path d="M21.06 12.28a5.69 5.69 0 00-1.67-4L14 2.81a2.83 2.83 0 00-4 0L4.61 8.23a5.69 5.69 0 00-1.67 4A5.7 5.7 0 008.66 18a6.88 6.88 0 01-1.23 2.37A1 1 0 008.24 22h7.52a1 1 0 00.78-1.63A6.84 6.84 0 0115.31 18a5.691 5.691 0 005.75-5.71v-.01zM18 14.91a3.78 3.78 0 01-3.66.95.985.985 0 00-.17 0h-.2a1.398 1.398 0 00-.22.06h-.15a.687.687 0 00-.13.11.75.75 0 00-.17.14.602.602 0 01-.06.11 2.51 2.51 0 00-.12.23c-.005.06-.005.12 0 .18v.18a8.839 8.839 0 00.82 3.13h-3.88a8.621 8.621 0 00.88-3v-.19c.005-.06.005-.12 0-.18a1.119 1.119 0 00-.13-.24.53.53 0 00-.22-.24 1.251 1.251 0 00-.13-.11h-.14a.878.878 0 00-.23-.07H9.9a1.082 1.082 0 00-.18 0A3.81 3.81 0 016 14.91a3.75 3.75 0 01-1.09-2.63A3.69 3.69 0 016 9.65l5.4-5.42a.81.81 0 011.13 0L18 9.65a3.691 3.691 0 011.09 2.63A3.78 3.78 0 0118 14.91z"></path>
    </svg>
  );
};

USpade.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USpade.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USpade;
