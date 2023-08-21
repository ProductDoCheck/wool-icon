import React from 'react';
import PropTypes from 'prop-types';

const FiUpload = props => {
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
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
      <path d="M17 8l-5-5-5 5"></path>
      <path d="M12 3v12"></path>
    </svg>
  );
};

FiUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiUpload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiUpload;
