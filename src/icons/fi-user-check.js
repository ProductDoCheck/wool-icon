import React from 'react';
import PropTypes from 'prop-types';

const FiUserCheck = props => {
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
      <path d="M17 11l2 2 4-4"></path>
      <path d="M8.5 11a4 4 0 100-8 4 4 0 000 8z"></path>
    </svg>
  );
};

FiUserCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUserCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUserCheck;
