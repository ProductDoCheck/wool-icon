import React from 'react';
import PropTypes from 'prop-types';

const FiLogOut = props => {
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
      <path d="M16 17l5-5-5-5"></path>
      <path d="M21 12H9"></path>
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
    </svg>
  );
};

FiLogOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiLogOut.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiLogOut;
