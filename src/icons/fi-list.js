import React from 'react';
import PropTypes from 'prop-types';

const FiList = props => {
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
      <path d="M8 18h13"></path>
      <path d="M3 18h.01"></path>
      <path d="M8 12h13"></path>
      <path d="M3 12h.01"></path>
      <path d="M8 6h13"></path>
      <path d="M3 6h.01"></path>
    </svg>
  );
};

FiList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiList.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiList;
