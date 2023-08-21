import React from 'react';
import PropTypes from 'prop-types';

const UCelsius = props => {
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
      <path d="M21 19h-6a3 3 0 01-3-3V8a3 3 0 013-3h6a1 1 0 100-2h-6a5 5 0 00-5 5v8a5 5 0 005 5h6a1 1 0 000-2zM5 3a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UCelsius.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCelsius.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCelsius;
