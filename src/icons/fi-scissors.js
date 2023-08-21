import React from 'react';
import PropTypes from 'prop-types';

const FiScissors = props => {
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
      <path d="M6 9a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M20 4L8.12 15.88"></path>
      <path d="M14.47 14.48L20 20"></path>
      <path d="M8.12 8.12L12 12"></path>
    </svg>
  );
};

FiScissors.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiScissors.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiScissors;
