import React from 'react';
import PropTypes from 'prop-types';

const FiFramer = props => {
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
      <path d="M5 16h7m-7 0V9h14V2H5l14 14H5zm0 0l7 7v-7H5z"></path>
    </svg>
  );
};

FiFramer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiFramer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiFramer;
