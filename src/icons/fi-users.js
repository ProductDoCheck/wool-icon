import React from 'react';
import PropTypes from 'prop-types';

const FiUsers = props => {
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
      <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <path d="M16 3.13a4 4 0 010 7.75"></path>
      <path d="M9 11a4 4 0 100-8 4 4 0 000 8z"></path>
    </svg>
  );
};

FiUsers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUsers.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUsers;
