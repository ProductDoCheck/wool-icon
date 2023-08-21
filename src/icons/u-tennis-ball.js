import React from 'react';
import PropTypes from 'prop-types';

const UTennisBall = props => {
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
      <path d="M12 2a10 10 0 00-7.35 16.76l.09.1a10 10 0 0014.52 0l.09-.1A10 10 0 0012 2zM5.61 16.79a7.93 7.93 0 010-9.58 6 6 0 010 9.58zM12 20a7.91 7.91 0 01-5-1.77A8 8 0 007 5.77a7.95 7.95 0 0110 0 8 8 0 000 12.46A7.91 7.91 0 0112 20zm6.39-3.21a6 6 0 010-9.58 7.93 7.93 0 010 9.58z"></path>
    </svg>
  );
};

UTennisBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTennisBall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTennisBall;