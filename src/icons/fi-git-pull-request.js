import React from 'react';
import PropTypes from 'prop-types';

const FiGitPullRequest = props => {
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
      <path d="M18 21a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M6 9v12"></path>
      <path d="M13 6h3a2 2 0 012 2v7"></path>
      <path d="M6 9a3 3 0 100-6 3 3 0 000 6z"></path>
    </svg>
  );
};

FiGitPullRequest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiGitPullRequest.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiGitPullRequest;
