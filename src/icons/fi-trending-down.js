import React from 'react';
import PropTypes from 'prop-types';

const FiTrendingDown = props => {
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
      <path d="M23 18l-9.5-9.5-5 5L1 6"></path>
      <path d="M17 18h6v-6"></path>
    </svg>
  );
};

FiTrendingDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiTrendingDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiTrendingDown;
