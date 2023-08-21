import React from 'react';
import PropTypes from 'prop-types';

const UVolleyball = props => {
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
      <path d="M20.59 6.9a.852.852 0 00-.07-.1A10 10 0 007.6 3h-.07a10 10 0 00-1 17.19l.33.2.1.07A9.93 9.93 0 0012 22h.21a10.001 10.001 0 008.38-15.1zM19 8.06c.267.463.485.952.65 1.46a10 10 0 00-3-.49.81.81 0 00-.31 0 9.78 9.78 0 00-3.58.73 7.85 7.85 0 01-1.84-1.6 8.16 8.16 0 018.08-.1zM12 4a7.86 7.86 0 014 1.07A7.77 7.77 0 0015 5a10 10 0 00-5.2 1.47 8 8 0 01-.64-1.94A7.92 7.92 0 0112 4zM6 6.71a8.26 8.26 0 011.33-1.19A9.9 9.9 0 0012 11.61a7.89 7.89 0 01-.77 2.88A8 8 0 016 7v-.29zM4 12a8.1 8.1 0 01.36-2.37 10 10 0 005.7 6.56 7.84 7.84 0 01-2.93 2.14A8 8 0 014 12zm7.86 8a7.802 7.802 0 01-2.61-.49 9.941 9.941 0 003.23-3.22A10.001 10.001 0 0014 11.41a7.707 7.707 0 011.78-.36A8 8 0 0111.86 20zm4.22-1.12A9.94 9.94 0 0018 13c-.004-.63-.065-1.26-.18-1.88a8.34 8.34 0 012.17.7V12a8 8 0 01-3.91 6.87v.01z"></path>
    </svg>
  );
};

UVolleyball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVolleyball.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVolleyball;
