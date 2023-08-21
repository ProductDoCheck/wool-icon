import React from 'react';
import PropTypes from 'prop-types';

const FiLink2 = props => {
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
      <path d="M15 7h3a5 5 0 110 10h-3m-6 0H6A5 5 0 116 7h3"></path>
      <path d="M8 12h8"></path>
    </svg>
  );
};

FiLink2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiLink2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiLink2;
