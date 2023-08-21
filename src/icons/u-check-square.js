import React from 'react';
import PropTypes from 'prop-types';

const UCheckSquare = props => {
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
      <path d="M10.21 14.75a1.002 1.002 0 001.42 0l4.08-4.08a1.004 1.004 0 10-1.42-1.42l-3.37 3.38-1.21-1.22a1.004 1.004 0 10-1.42 1.42l1.92 1.92zM21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 18H4V4h16v16z"></path>
    </svg>
  );
};

UCheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCheckSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCheckSquare;
