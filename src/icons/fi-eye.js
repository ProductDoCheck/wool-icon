import React from 'react';
import PropTypes from 'prop-types';

const FiEye = props => {
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
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    </svg>
  );
};

FiEye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiEye.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiEye;
