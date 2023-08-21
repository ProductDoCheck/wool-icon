import React from 'react';
import PropTypes from 'prop-types';

const ULeftToRightTextDirection = props => {
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
      <path d="M21.42 17.62a1 1 0 00-.21-.33l-3-3a1.004 1.004 0 10-1.42 1.42l1.3 1.29H3.5a1 1 0 000 2h14.59l-1.3 1.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l3-3a1 1 0 00.21-.33 1 1 0 000-.76zM8.5 10v4a1 1 0 102 0V4h2v10a1 1 0 002 0V4h1a1 1 0 100-2h-7a4 4 0 000 8zm0-6v4a2 2 0 110-4z"></path>
    </svg>
  );
};

ULeftToRightTextDirection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULeftToRightTextDirection.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULeftToRightTextDirection;
