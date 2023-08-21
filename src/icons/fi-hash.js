import React from 'react';
import PropTypes from 'prop-types';

const FiHash = props => {
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
      <path d="M4 15h16"></path>
      <path d="M4 9h16"></path>
      <path d="M16 3l-2 18"></path>
      <path d="M10 3L8 21"></path>
    </svg>
  );
};

FiHash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiHash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiHash;
