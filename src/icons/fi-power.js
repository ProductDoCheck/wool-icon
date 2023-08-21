import React from 'react';
import PropTypes from 'prop-types';

const FiPower = props => {
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
      <path d="M18.36 6.64a9 9 0 11-12.73 0"></path>
      <path d="M12 2v10"></path>
    </svg>
  );
};

FiPower.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiPower.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiPower;
