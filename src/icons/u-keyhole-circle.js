import React from 'react';
import PropTypes from 'prop-types';

const UKeyholeCircle = props => {
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
      <path d="M12 8a2 2 0 00-2 2 2 2 0 001 1.72V15a1 1 0 002 0v-3.28A2 2 0 0014 10a2 2 0 00-2-2zm0-6a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UKeyholeCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UKeyholeCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UKeyholeCircle;
