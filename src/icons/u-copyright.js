import React from 'react';
import PropTypes from 'prop-types';

const UCopyright = props => {
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
      <path d="M11 9h2a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-2a3 3 0 00-3 3v4a3 3 0 003 3h2a3 3 0 003-3 1 1 0 00-2 0 1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1zm1-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UCopyright.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCopyright.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCopyright;
