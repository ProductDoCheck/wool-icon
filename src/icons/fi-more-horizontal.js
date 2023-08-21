import React from 'react';
import PropTypes from 'prop-types';

const FiMoreHorizontal = props => {
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
      <path d="M19 13a1 1 0 100-2 1 1 0 000 2z"></path>
      <path d="M12 13a1 1 0 100-2 1 1 0 000 2z"></path>
      <path d="M5 13a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  );
};

FiMoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMoreHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMoreHorizontal;
