import React from 'react';
import PropTypes from 'prop-types';

const FiLogIn = props => {
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
      <path d="M10 17l5-5-5-5"></path>
      <path d="M15 12H3"></path>
      <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"></path>
    </svg>
  );
};

FiLogIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiLogIn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiLogIn;
