import React from 'react';
import PropTypes from 'prop-types';

const FiRewind = props => {
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
      <path d="M22 19l-9-7 9-7v14z"></path>
      <path d="M11 19l-9-7 9-7v14z"></path>
    </svg>
  );
};

FiRewind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiRewind.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiRewind;
