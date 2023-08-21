import React from 'react';
import PropTypes from 'prop-types';

const UFrown = props => {
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
      <path d="M8.36 15.33a1 1 0 00.173 1.646.998.998 0 001.107-.116 3.76 3.76 0 014.72 0 1.001 1.001 0 001.41-.13 1 1 0 00-.13-1.4 5.81 5.81 0 00-7.28 0zM9 11a1 1 0 100-2 1 1 0 000 2zm3-9a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm3-11a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UFrown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFrown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFrown;
