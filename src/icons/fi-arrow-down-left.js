import React from 'react';
import PropTypes from 'prop-types';

const FiArrowDownLeft = props => {
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
      <path d="M17 7L7 17"></path>
      <path d="M17 17H7V7"></path>
    </svg>
  );
};

FiArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiArrowDownLeft;
