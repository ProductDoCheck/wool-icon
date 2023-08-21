import React from 'react';
import PropTypes from 'prop-types';

const UPauseCircle = props => {
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
      <path d="M10 7a1 1 0 00-1 1v8a1 1 0 102 0V8a1 1 0 00-1-1zm2-5a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm2-13a1 1 0 00-1 1v8a1 1 0 002 0V8a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UPauseCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPauseCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPauseCircle;
