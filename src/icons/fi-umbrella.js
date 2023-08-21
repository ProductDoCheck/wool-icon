import React from 'react';
import PropTypes from 'prop-types';

const FiUmbrella = props => {
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
      <path d="M18 19a3 3 0 01-6 0v-7m11 0a11.05 11.05 0 00-22 0h22z"></path>
    </svg>
  );
};

FiUmbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUmbrella.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUmbrella;
