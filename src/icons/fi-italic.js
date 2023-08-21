import React from 'react';
import PropTypes from 'prop-types';

const FiItalic = props => {
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
      <path d="M14 20H5"></path>
      <path d="M19 4h-9"></path>
      <path d="M15 4L9 20"></path>
    </svg>
  );
};

FiItalic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiItalic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiItalic;
