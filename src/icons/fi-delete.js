import React from 'react';
import PropTypes from 'prop-types';

const FiDelete = props => {
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
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2v0z"></path>
      <path d="M18 9l-6 6"></path>
      <path d="M12 9l6 6"></path>
    </svg>
  );
};

FiDelete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiDelete.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiDelete;
