import React from 'react';
import PropTypes from 'prop-types';

const FiCornerLeftUp = props => {
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
      <path d="M14 9L9 4 4 9"></path>
      <path d="M20 20h-7a4 4 0 01-4-4V4"></path>
    </svg>
  );
};

FiCornerLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCornerLeftUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCornerLeftUp;
