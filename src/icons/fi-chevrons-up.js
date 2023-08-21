import React from 'react';
import PropTypes from 'prop-types';

const FiChevronsUp = props => {
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
      <path d="M17 18l-5-5-5 5"></path>
      <path d="M17 11l-5-5-5 5"></path>
    </svg>
  );
};

FiChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiChevronsUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiChevronsUp;
