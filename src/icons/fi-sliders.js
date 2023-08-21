import React from 'react';
import PropTypes from 'prop-types';

const FiSliders = props => {
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
      <path d="M20 21v-5"></path>
      <path d="M17 16h6"></path>
      <path d="M4 21v-7"></path>
      <path d="M1 14h6"></path>
      <path d="M12 21v-9"></path>
      <path d="M9 8h6"></path>
      <path d="M20 12V3"></path>
      <path d="M12 8V3"></path>
      <path d="M4 10V3"></path>
    </svg>
  );
};

FiSliders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiSliders.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiSliders;
