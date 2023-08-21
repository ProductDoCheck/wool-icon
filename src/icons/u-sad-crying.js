import React from 'react';
import PropTypes from 'prop-types';

const USadCrying = props => {
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
      <path d="M12 2a10 10 0 00-3.41 19.39h.06a9.81 9.81 0 006.7 0h.06A10 10 0 0012 2zm2 17.74a7.82 7.82 0 01-4 0v-3.13a3.79 3.79 0 014 0v3.13zm2-.82V11a1 1 0 000-2h-2a1 1 0 100 2v3.39a6 6 0 00-4 0V11a1 1 0 000-2H8a1 1 0 000 2v7.92a8 8 0 118 0z"></path>
    </svg>
  );
};

USadCrying.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USadCrying.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USadCrying;
