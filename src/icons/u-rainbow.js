import React from 'react';
import PropTypes from 'prop-types';

const URainbow = props => {
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
      <path d="M5 12a1 1 0 000 2 5 5 0 015 5 1 1 0 002 0 7 7 0 00-7-7zm0-8a1 1 0 000 2 13 13 0 0113 13 1 1 0 002 0A15 15 0 005 4zm0 4a1 1 0 000 2 9 9 0 019 9 1 1 0 002 0A11 11 0 005 8z"></path>
    </svg>
  );
};

URainbow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URainbow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URainbow;
