import React from 'react';
import PropTypes from 'prop-types';

const FiSkipForward = props => {
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
      <path d="M19 5v14"></path>
      <path d="M5 4l10 8-10 8V4z"></path>
    </svg>
  );
};

FiSkipForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiSkipForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiSkipForward;
