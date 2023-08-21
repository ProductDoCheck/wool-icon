import React from 'react';
import PropTypes from 'prop-types';

const UMars = props => {
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
      <path d="M20.42 4.12a1 1 0 00-.54-.54 1 1 0 00-.38-.08h-4a1 1 0 100 2h1.59l-2.4 2.4a7 7 0 101.41 1.41l2.4-2.4V8.5a1 1 0 002 0v-4a1 1 0 00-.08-.38zM14 17a5 5 0 11-7.141-7A5 5 0 0114 17z"></path>
    </svg>
  );
};

UMars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMars.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMars;
