import React from 'react';
import PropTypes from 'prop-types';

const FiGitCommit = props => {
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
      <path d="M17.01 12h5.95"></path>
      <path d="M1.05 12H7"></path>
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
    </svg>
  );
};

FiGitCommit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiGitCommit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiGitCommit;
