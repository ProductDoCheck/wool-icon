import React from 'react';
import PropTypes from 'prop-types';

const FiUserX = props => {
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
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <path d="M18 8l5 5"></path>
      <path d="M23 8l-5 5"></path>
      <path d="M8.5 11a4 4 0 100-8 4 4 0 000 8z"></path>
    </svg>
  );
};

FiUserX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUserX.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUserX;
