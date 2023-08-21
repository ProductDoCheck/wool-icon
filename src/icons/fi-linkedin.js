import React from 'react';
import PropTypes from 'prop-types';

const FiLinkedin = props => {
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
      <path d="M6 9H2v12h4V9z"></path>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6v0z"></path>
      <path d="M4 6a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

FiLinkedin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiLinkedin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiLinkedin;
