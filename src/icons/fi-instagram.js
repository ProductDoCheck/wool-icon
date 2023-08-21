import React from 'react';
import PropTypes from 'prop-types';

const FiInstagram = props => {
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
      <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"></path>
      <path d="M16 11.37a4 4 0 11-7.914 1.173A4 4 0 0116 11.37z"></path>
      <path d="M17.5 6.5h.01"></path>
    </svg>
  );
};

FiInstagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiInstagram.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiInstagram;
