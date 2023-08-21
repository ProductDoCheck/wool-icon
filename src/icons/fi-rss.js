import React from 'react';
import PropTypes from 'prop-types';

const FiRss = props => {
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
      <path d="M4 11a9 9 0 019 9"></path>
      <path d="M4 4a16 16 0 0116 16"></path>
      <path d="M5 20a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  );
};

FiRss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiRss.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiRss;
