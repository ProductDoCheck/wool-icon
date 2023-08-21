import React from 'react';
import PropTypes from 'prop-types';

const UAnalysis = props => {
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
      <path d="M21.71 7.29a.999.999 0 00-1.42 0L14 13.59l-4.29-4.3a1 1 0 00-1.42 0l-6 6a1 1 0 00.325 1.639 1 1 0 001.095-.219L9 11.41l4.29 4.3a1.001 1.001 0 001.42 0l7-7a.998.998 0 000-1.42z"></path>
    </svg>
  );
};

UAnalysis.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAnalysis.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAnalysis;
