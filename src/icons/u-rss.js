import React from 'react';
import PropTypes from 'prop-types';

const URss = props => {
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
      <path d="M2.88 16.88a3 3 0 000 4.24 3 3 0 004.24 0 3 3 0 00-4.24-4.24zm2.83 2.83a1.004 1.004 0 11-1.42-1.42 1.004 1.004 0 011.42 1.42zM5 12a1 1 0 000 2 5 5 0 015 5 1 1 0 102 0 7 7 0 00-7-7zm0-4a1 1 0 000 2 9 9 0 019 9 1 1 0 102 0 11.08 11.08 0 00-3.22-7.78A11.08 11.08 0 005 8zm10.61.39A15.11 15.11 0 005 4a1 1 0 000 2 13 13 0 0113 13 1 1 0 102 0 15.11 15.11 0 00-4.39-10.61z"></path>
    </svg>
  );
};

URss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URss.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URss;
