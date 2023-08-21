import React from 'react';
import PropTypes from 'prop-types';

const FiBarChart2 = props => {
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
      <path d="M6 20v-6"></path>
      <path d="M18 20V10"></path>
      <path d="M12 20V4"></path>
    </svg>
  );
};

FiBarChart2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiBarChart2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiBarChart2;
