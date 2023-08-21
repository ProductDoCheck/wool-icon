import React from 'react';
import PropTypes from 'prop-types';

const FiCamera = props => {
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
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"></path>
      <path d="M12 17a4 4 0 100-8 4 4 0 000 8z"></path>
    </svg>
  );
};

FiCamera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCamera.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCamera;
