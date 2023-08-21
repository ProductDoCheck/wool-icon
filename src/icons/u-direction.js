import React from 'react';
import PropTypes from 'prop-types';

const UDirection = props => {
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
      <path d="M9.71 10.21L12 7.91l2.29 2.3a.999.999 0 001.42 0 1 1 0 000-1.42l-3-3a1 1 0 00-1.42 0l-3 3a1.004 1.004 0 101.42 1.42zm4.58 4.58L12 17.09l-2.29-2.3a1.004 1.004 0 00-1.42 1.42l3 3a.999.999 0 001.42 0l3-3a1.004 1.004 0 10-1.42-1.42z"></path>
    </svg>
  );
};

UDirection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDirection.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDirection;
