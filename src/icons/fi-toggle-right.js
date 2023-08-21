import React from 'react';
import PropTypes from 'prop-types';

const FiToggleRight = props => {
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
      <path d="M16 5H8a7 7 0 000 14h8a7 7 0 100-14z"></path>
      <path d="M16 15a3 3 0 100-6 3 3 0 000 6z"></path>
    </svg>
  );
};

FiToggleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiToggleRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiToggleRight;
