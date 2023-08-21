import React from 'react';
import PropTypes from 'prop-types';

const UX = props => {
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
      <path d="M8 19a3 3 0 01-3-3V8a3 3 0 013-3 1 1 0 000-2 5 5 0 00-5 5v8a5 5 0 005 5 1 1 0 000-2zm7.71-3.29a1.002 1.002 0 000-1.42L13.41 12l2.3-2.29a1.004 1.004 0 10-1.42-1.42L12 10.59l-2.29-2.3a1.004 1.004 0 00-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l2.29-2.3 2.29 2.3a1.002 1.002 0 001.42 0zM16 3a1 1 0 100 2 3 3 0 013 3v8a3 3 0 01-3 3 1 1 0 000 2 5 5 0 005-5V8a5 5 0 00-5-5z"></path>
    </svg>
  );
};

UX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UX.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UX;
