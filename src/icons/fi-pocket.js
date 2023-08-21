import React from 'react';
import PropTypes from 'prop-types';

const FiPocket = props => {
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
      <path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-20 0V5a2 2 0 012-2v0z"></path>
      <path d="M8 10l4 4 4-4"></path>
    </svg>
  );
};

FiPocket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiPocket.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiPocket;
