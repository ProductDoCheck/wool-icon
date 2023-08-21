import React from 'react';
import PropTypes from 'prop-types';

const U17Plus = props => {
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
      <path d="M11 7v2a1 1 0 002 0V8h2.78L14 16.8a1.002 1.002 0 00.8 1.2h.2a1 1 0 001-.8l2-10a1 1 0 00-.21-.83A1 1 0 0017 6h-5a1 1 0 00-1 1zm7-2h1v1a1 1 0 002 0V5h1a1 1 0 100-2h-1V2a1 1 0 00-2 0v1h-1a1 1 0 100 2zM7 7v10a1 1 0 102 0V7a1 1 0 10-2 0zm14.6 2a1 1 0 00-.78 1.18 9 9 0 11-7-7 1.02 1.02 0 00.4-2A10.8 10.8 0 0012 1a11 11 0 1010.78 8.8.998.998 0 00-1.18-.8z"></path>
    </svg>
  );
};

U17Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

U17Plus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default U17Plus;
