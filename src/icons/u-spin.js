import React from 'react';
import PropTypes from 'prop-types';

const USpin = props => {
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
      <path d="M13 3a7 7 0 000 14 5 5 0 100-10 3 3 0 000 6 1 1 0 000-2 1 1 0 010-2 3 3 0 010 6 5 5 0 110-10 7 7 0 110 14 9 9 0 01-9-9 1 1 0 00-2 0 11 11 0 0011 11 9 9 0 000-18z"></path>
    </svg>
  );
};

USpin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USpin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USpin;
