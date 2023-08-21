import React from 'react';
import PropTypes from 'prop-types';

const FiMap = props => {
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
      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"></path>
      <path d="M16 6v16"></path>
      <path d="M8 2v16"></path>
    </svg>
  );
};

FiMap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMap.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMap;
