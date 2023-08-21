import React from 'react';
import PropTypes from 'prop-types';

const FiTrendingUp = props => {
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
      <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
      <path d="M17 6h6v6"></path>
    </svg>
  );
};

FiTrendingUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiTrendingUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiTrendingUp;
