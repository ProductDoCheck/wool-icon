import React from 'react';
import PropTypes from 'prop-types';

const FiFeather = props => {
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
      <path d="M20.24 12.24a6.003 6.003 0 00-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
      <path d="M16 8L2 22"></path>
      <path d="M17.5 15H9"></path>
    </svg>
  );
};

FiFeather.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiFeather.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiFeather;
