import React from 'react';
import PropTypes from 'prop-types';

const FiGitBranch = props => {
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
      <path d="M6 21a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M18 9a9 9 0 01-9 9"></path>
      <path d="M18 9a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M6 3v12"></path>
    </svg>
  );
};

FiGitBranch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiGitBranch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiGitBranch;
