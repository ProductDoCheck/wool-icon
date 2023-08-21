import React from 'react';
import PropTypes from 'prop-types';

const UXAdd = props => {
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
      <path d="M14.71 7.29a1 1 0 00-1.42 0L11 9.59l-2.29-2.3a1.004 1.004 0 10-1.42 1.42L9.59 11l-2.3 2.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l2.29-2.3 2.29 2.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L12.41 11l2.3-2.29a1 1 0 000-1.42zM7 18a3 3 0 01-3-3V7a3 3 0 013-3 1 1 0 000-2 5 5 0 00-5 5v8a5 5 0 005 5 1 1 0 000-2zM18 7v6a1 1 0 002 0V7a5 5 0 00-5-5 1 1 0 100 2 3 3 0 013 3zm3 11h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2z"></path>
    </svg>
  );
};

UXAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UXAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UXAdd;
