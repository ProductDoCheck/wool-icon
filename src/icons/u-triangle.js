import React from 'react';
import PropTypes from 'prop-types';

const UTriangle = props => {
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
      <path d="M21.87 19.29l-9-15.58a1 1 0 00-1.74 0l-9 15.58a1 1 0 00.87 1.5h18a1 1 0 00.87-1.5zm-17.14-.5L12 6.21l7.27 12.58H4.73z"></path>
    </svg>
  );
};

UTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTriangle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTriangle;
