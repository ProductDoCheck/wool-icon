import React from 'react';
import PropTypes from 'prop-types';

const FiUser = props => {
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
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
      <path d="M12 11a4 4 0 100-8 4 4 0 000 8z"></path>
    </svg>
  );
};

FiUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUser.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUser;
