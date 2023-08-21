import React from 'react';
import PropTypes from 'prop-types';

const UDirections = props => {
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
      <path d="M21.12 9.88l-7-7a3.08 3.08 0 00-4.24 0l-7 7a3 3 0 000 4.24l7 7a3 3 0 004.24 0l7-7a3 3 0 000-4.24zm-1.41 2.83l-7 7a.998.998 0 01-1.42 0l-7-7a.999.999 0 010-1.42l7-7a1 1 0 011.42 0l7 7a.999.999 0 010 1.42zm-5.5-3.42a1.004 1.004 0 00-1.42 1.42l.3.29H9.5a1 1 0 00-1 1v2a1 1 0 102 0v-1h2.59l-.3.29a1 1 0 000 1.42 1 1 0 001.42 0l2-2a.997.997 0 00.219-1.095.999.999 0 00-.219-.325l-2-2z"></path>
    </svg>
  );
};

UDirections.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDirections.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDirections;
