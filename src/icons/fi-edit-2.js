import React from 'react';
import PropTypes from 'prop-types';

const FiEdit2 = props => {
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
      <path d="M17 3a2.827 2.827 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  );
};

FiEdit2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiEdit2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiEdit2;
