import React from 'react';
import PropTypes from 'prop-types';

const FiTwitch = props => {
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
      <path d="M16 11V7m5-5H3v16h5v4l4-4h5l4-4V2zm-10 9V7v4z"></path>
    </svg>
  );
};

FiTwitch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiTwitch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiTwitch;
